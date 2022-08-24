import dotenv from "dotenv";
dotenv.config();

function user_get(user_id, token, fields) {
  return `https://api.vk.com/method/users.get?user_ids=${user_id}&fields=${fields}&access_token=${token}&v=5.131`;
}

function friends_get(oauth_model, count, offset, fields) {
  return `https://api.vk.com/method/friends.get?user_id=${oauth_model.user_id}&count=${count}&offset=${offset}&fields=${fields}&access_token=${oauth_model.access_token}&v=5.131`;
}
function friends_get_by_id(id, oauth_model, count, offset, fields) {
  return `https://api.vk.com/method/friends.get?user_id=${id}&access_token=${oauth_model.access_token}&v=5.131`;
}

export { user_get, friends_get, friends_get_by_id };
