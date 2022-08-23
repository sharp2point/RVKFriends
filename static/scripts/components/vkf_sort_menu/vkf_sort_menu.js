import Template from "./template/template.js";

class SortMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Template.render({
      sortChoices: ["","name", "photo", "friend"],
    });
    this.querySelector(".container select").addEventListener("change", (e) =>
      this.sortHandler(e)
    );
  }
  sortBy(user_list, param){
    return user_list.sort((a,b)=>{
      if(parseInt(a.getAttribute(param))){
        if(parseInt(a.getAttribute(param)) > parseInt(b.getAttribute(param))) return 1;
        if(parseInt(a.getAttribute(param)) < parseInt(b.getAttribute(param))) return -1;
      }else{
        if(a.getAttribute(param) > b.getAttribute(param)) return 1;
        if(a.getAttribute(param) < b.getAttribute(param)) return -1;
      }
      return 0;
    })
  }
  reset(user_list){
    let all_user = document.querySelector(".all-friends");
    while (all_user.firstChild) {
      all_user.removeChild(all_user.firstChild);
    }
    user_list.forEach((item) => {
      all_user.appendChild(item);
    });
  }

  sortHandler(e) {
    let users = document.querySelectorAll("vkf-user-card");
    let user_list = Array.prototype.slice.call(users,0);
    user_list = this.sortBy(user_list,e.target.value)
    this.reset(user_list);    
  }
}
if (!customElements.get("vkf-sort-menu")) {
  customElements.define("vkf-sort-menu", SortMenu);
}

//export default SortMenu;
