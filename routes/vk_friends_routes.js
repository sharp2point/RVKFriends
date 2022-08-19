import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { user_get, friends_get } from "../modules/vk_paths.js";
import { user_model } from "../../VKauth/routes/vk_oauth_router.js";
import { OAuthModel, UserModel } from "../VKauth/modules/models.js";
import { Friends } from "../modules/models.js";
import { get_friends} from "../modules/get_friends.js";

dotenv.config();

let router = express.Router();

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
    await get_friends(friends.items).then((users)=> res.send({users:users}))
  }
);

export { router };
