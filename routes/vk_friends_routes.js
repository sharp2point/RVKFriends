import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { friends_get } from "../modules/vk_paths.js";
import { OAuthModel } from "../VKauth/modules/models.js";
import { Friends } from "../modules/models.js";
import { get_friends, get_friend } from "../modules/get_friends.js";

dotenv.config();

let router = express.Router();
let offset = 0;
let items_friends = [];

router.get("/", async (req, res) => {
  let oauth_model = OAuthModel.getOAuthModel();
  let friends = await fetch(friends_get(oauth_model, 0, 0, ""))
    .then((res) => res.json())
    .then((json) => {
      let friends = Friends.fromJson(json.response);
      items_friends = friends.items;
      res.render("friends", { friends: friends });
    })
    .catch((err) => console.log(`Error: ${err}`));
});

router.get("/friends", async (req, res) => {
  await get_friend(items_friends[offset]).then((user) => res.send({ user: user }));
  offset++;
  if(offset>=items_friends.length) offset=0;
});

export { router };
