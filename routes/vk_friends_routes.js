import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { friends_get } from "../modules/vk_paths.js";
import { OAuthModel } from "../VKauth/modules/models.js";
import { Friends } from "../modules/models.js";
import { get_friends } from "../modules/get_friends.js";

dotenv.config();

let router = express.Router();

let count = 1;
let offset = 0;

router.get(
  "/",
  async (req, res, next) => {
    let oauth_model = OAuthModel.getOAuthModel();

    let friends = await fetch(friends_get(oauth_model, 0, 0, ""))
      .then((res) => res.json())
      .then((json) => Friends.fromJson(json.response))
      .catch((err) => console.log(`Error: ${err}`));
    res.vk_friends = { friends: friends };
    next();
  },
  async (req, res) => {
    let friends = Friends.fromJson(res.vk_friends.friends);
    let parts_friend_5 = friends.items.slice(offset, count);
    await get_friends(parts_friend_5).then((users) =>
      res.render("friends", { users: users, user_count: friends.items.length })
    );
    count += 1;
  }
);

export { router };
