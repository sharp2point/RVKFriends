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

function append_friend(user) {
  const counters = JSON.stringify(user.counters).replaceAll('"', "'");
  let user_card = `
        <vkf-user-card id="${user.id}" name="${user.first_name} ${user.last_name}"
                       avatar="${user.photo_max_orig}"
                       counters=${counters}>`;
  friends_place.innerHTML += user_card;
}
const timer_id = setInterval(() => {
  if (count_friend === 0) {
    clearInterval(timer_id);
  }
  count_friend--;
  fetch("http://localhost:1234/vk_friends/friends")
    .then((res) => res.json())
    .then((user) => {
      friends_list.push(user.user);
      if (friends_list.length === parseInt(fcount.textContent)) {     
        // id_list = Array.prototype.map.call(friends_list,(x)=>x.id); 
        // console.log(id_list);  

        friends_list.forEach((item) => {
          append_friend(item);
        });
        
      } else {
        load_count++;
        lcount.innerHTML = `${load_count}`;
      }
    })
    .catch((err) => console.log(err));
}, 10);
