import express from "express";
import dotenv from "dotenv";
import path from "path";

//--------------- YOU IMPORT ---------------------
import { router as vk_oauth_router, oauth_model, user_model } from "./VKauth/routes/vk_oauth_router.js";
import { router as vk_friends_router } from "./routes/vk_friends_routes.js";

// ------------ EXPRESS TEMPLATE -----------------
dotenv.config();
const __dirname = path.resolve();
const port = process.env.PORT || 1234;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "VKauth/templates"));
app.use(express.static(path.resolve(__dirname, "VKauth/static")));

// ------------- YOU CODE ----------------------------
// подключение роутинга oauth
app.use("/vk_oauth", vk_oauth_router);

// подключенгие роутинга friends
app.use("/vk_friends", vk_friends_router);


// -------------- EXPRESS ROUTE -----------------------
app.get("/", async (req, res) => {
  if(oauth_model === undefined){
    res.render("index", { user: "" }); 
  }else{
    res.render("index",{user: user_model});
  }
  
});

// ------------- START APP ----------------------------
app.listen(port, () => {
  console.log(`server start on port: ${port}`);
});
