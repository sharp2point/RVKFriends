// front part

let headList = document.querySelectorAll(".u-name");
let fcount = document.querySelector(".f-count");
let friends_place = document.querySelector(".all-friends");
const sort_menu_items = document.querySelectorAll(".list");

function activeSortMenuItem() {
  sort_menu_items.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
sort_menu_items.forEach(item=>{
    item.addEventListener("click", activeSortMenuItem)
})

let count_friend = parseInt(fcount.textContent) - 1;

function append_friend(user) {
  let user_card = `
        <div class="card">
            <h4 class="u-name">${user.first_name} ${user.last_name}</h4>
            <img src="${user.photo_max_orig}" />
            <ul>
                <li>Photos: ${user.counters.photos}</li>
                <li>Friends: ${user.counters.friends}</li>
            </ul>
        </div>`;
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
      append_friend(user.user);
    })
    .catch((err) => console.log(err));
}, 10);
