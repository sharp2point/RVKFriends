import fetch from "node-fetch";
import { user_get, friends_get } from "../modules/vk_paths.js";
import { OAuthModel, UserModel } from "../VKauth/modules/models.js";

const COUNT = 5;

async function get_friend(id) {
  await sleep(100);
  return await fetch(
    user_get(
      id,
      OAuthModel.getOAuthModel().access_token,
      "photo_max_orig,online,bdate,counters"
    )
  )
    .then((res) => res.json())
    .then((json) => json.response[0])
    .then((user) => {
      return UserModel.fromJson(user);
    })
    .catch((err) => console.log(`Error: ${err}`));
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function get_friends(friends_list_id) {
  let part_friends = friends_list_id.slice(1, friends_list_id.length);
  let users = [];
  for (let item of part_friends) {
    await get_friend(item).then((user) => {
      users.push(user);
    });
  }
  return await get_friend(friends_list_id[0]).then((user) => {
    users.push(user);
    return users;
  });
}

export { get_friends };
