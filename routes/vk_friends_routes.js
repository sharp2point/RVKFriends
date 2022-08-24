import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { friends_get, friends_get_by_id } from "../modules/vk_paths.js";
import { OAuthModel } from "../VKauth/modules/models.js";
import { Friends } from "../modules/models.js";
import { get_friends, get_friend } from "../modules/get_friends.js";

dotenv.config();

let router = express.Router();
let offset = 0; // переменная смещения в списке item_friends
let items_friends = []; // список id друзей

router.get("/", async (req, res) => {
  let oauth_model = OAuthModel.getOAuthModel();
  if (oauth_model !== undefined) {
    let friends = await fetch(friends_get(oauth_model, 0, 0, ""))
      .then((res) => res.json())
      .then((json) => {
        let friends = Friends.fromJson(json.response);
        items_friends = friends.items;
        res.render("friends", { count: items_friends.length });
      })
      .catch((err) => console.log(`Error: ${err}`));
  } else {
    req.send({ Error: "Authorization error" });
  }
});

router.get("/friends", async (req, res) => {
  await get_friend(items_friends[offset]).then((user) =>
    res.send({ user: user })
  );
  offset++;
  if (offset >= items_friends.length) offset = 0;
});

router.get("/friends/:id", async (req, res) => {
  let oauth_model = OAuthModel.getOAuthModel();
  await fetch(friends_get_by_id(parseInt(req.params.id), oauth_model, 0, 0, ""))
    .then((res) => res.json())
    .then((json) => res.send(json.response))
    .catch((err) => console.log(err));
});

export { router };
