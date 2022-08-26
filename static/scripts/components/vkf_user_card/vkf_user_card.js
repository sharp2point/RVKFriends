import CardTemplate from "./template/card_template.js";

class UserCard extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute("id");
    const name = this.getAttribute("name");
    const avatar = this.getAttribute("avatar");
    const counters = JSON.parse(
      this.getAttribute("counters").replaceAll("'", '"')
    );

    this.innerHTML = CardTemplate.render({
      name: name,
      avatar: avatar,
      photos: counters.photos,
      friends: counters.friends,
    });
    this.setAttribute("photo", counters.photos);
    this.setAttribute("friend", counters.friends);
    // this.addEventListener("click", async (e) => {
    //   let res = await fetch("http://localhost:1234/vk_friends/friends/" + id)
    //     .then((res) => res.json())
    //     .then((json) => json.items)
    //     .catch((err) => console.log(err));
    // });
  }
}
if (!customElements.get("vkf-user-card")) {
  customElements.define("vkf-user-card", UserCard);
}

export default UserCard;
