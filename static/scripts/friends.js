// front part
import UserCard from "./components/vkf_user_card/vkf_user_card.js";

let headList = document.querySelectorAll(".u-name");
let fcount = document.querySelector(".f-count");
let lcount = document.querySelector(".l-count");
let friends_place = document.querySelector(".all-friends");
let count_friend = parseInt(fcount.textContent) - 1;

let load_count = 1; // счетчик процесса загрузки данных друзей

let friends_list = []; // список данных всех друзей
let id_list = []; // список id всех друзей
let all_user_card;
//-------------------------------------------------------------------//
function create_user_card(user){
  const counters = JSON.stringify(user.counters).replaceAll('"', "'");

  return `<vkf-user-card id="${user.id}" name="${user.first_name} ${user.last_name}"
                       avatar="${user.photo_max_orig}"
                       counters=${counters} class=""></vkf-user-card>`;  
}
function find_cross_friends_id(id_list_one, id_list_two){
  return id_list_one.filter(id => id_list_two.indexOf(id) > -1)
}
function mark_cross_friends(all_friends, cross_id_list){
  all_friends.forEach(item=>{
    item.style.border = "none"
    item.style.opacity = "0.1"
    item.style.transform = "scale(1)"
    for(let id of cross_id_list){ 
      if(parseInt(item.getAttribute("id"))===parseInt(id)){
        console.log("MARK : "+id)
        item.style.opacity = "1"        
        item.style.border = "5px solid #FFCCCC"
        item.style.transform = "scale(1.2)"
      }
    }
  })
}
async function get_user_friends_id(user){
  let id_list_fetch = await fetch(
    "http://localhost:1234/vk_friends/friends/" + user.getAttribute("id")
  )
    .then((res) => res.json())
    .then((json) => json.items)
    .catch((err) => console.log(err));

  return find_cross_friends_id(id_list, id_list_fetch)  
}
function append_friend(user) { 
  friends_place.innerHTML += create_user_card(user);
  
  all_user_card = document.querySelectorAll("vkf-user-card")
  all_user_card.forEach((item) =>
    item.addEventListener("click", async (e) => {
      let cross_id_list = await get_user_friends_id(item)
      mark_cross_friends(all_user_card, cross_id_list)
    })
  );
}
const timer_id = setInterval(() => {
  if (count_friend === 0) {
    clearInterval(timer_id);
  }
  count_friend--;
  fetch("http://localhost:1234/vk_friends/friends")
    .then(res => res.json())
    .then(user => {
      friends_list.push(user.user);
      if (friends_list.length === parseInt(fcount.textContent)) {
        id_list = Array.prototype.map.call(friends_list, item => item.id);

        friends_list.forEach(item => {
          append_friend(item);
        });
      } else {
        load_count++;
        lcount.innerHTML = `${load_count}`;
      }
    })
    .catch((err) => console.log(err));
}, 10);
