import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { user_get, friends_get } from "../modules/vk_paths.js";
import { user_model } from "../../VKauth/routes/vk_oauth_router.js";
import { OAuthModel, UserModel } from "../VKauth/modules/models.js";

dotenv.config();

let FIELDS = process.env.FIELDS;

let router = express.Router();

router.get("/", async (req, res) => {
  let oauth_model = OAuthModel.getOAuthModel()
  let data = await fetch(friends_get(oauth_model, 5, 0, FIELDS))
    .then((res) => res.json())
    .then((json) => console.log(json.response))
    .catch((err) => console.log(`Error: ${err}`));

    res.send(data)
});

export { router };
