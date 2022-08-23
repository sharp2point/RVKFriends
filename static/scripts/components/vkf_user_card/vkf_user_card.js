import CardTemplate from "./template/card_template.js";

class UserCard extends HTMLElement{
    connectedCallback(){
        const name = this.getAttribute("name")
        const avatar = this.getAttribute("avatar")
        const counters = JSON.parse(this.getAttribute("counters").replaceAll('\'','\"'))
        
        this.innerHTML = CardTemplate.render({
            name: name,
            avatar: avatar,
            photos: counters.photos,
            friends: counters.friends
        });
        
        this.setAttribute("photo", counters.photos)
        this.setAttribute("friend", counters.friends)
    }
}
if(!customElements.get("vkf-user-card")){
    customElements.define("vkf-user-card", UserCard)
}

export default UserCard;