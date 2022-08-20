let headList = document.querySelectorAll(".u-name");
let fcount = document.querySelector(".f-count");
let friends_place = document.querySelector(".all-friends");

let count_friend = parseInt(fcount.textContent)-1;

function append_friend(user) {
  let u = user.user;
  let user_card = `
        <div class="card">
            <h4 class="u-name">${u.first_name} ${u.last_name}</h4>
            <img src="${u.photo_max_orig}" />
            <ul>
                <li>Photos: ${u.counters.photos}</li>
                <li>Friends: ${u.counters.friends}</li>
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
      append_friend(user);
    })
    .catch((err) => console.log(err));
}, 10);
