class ItemMenu extends HTMLElement {
  connectedCallback() {
    let name = this.getAttribute("name")
    let icon = this.getAttribute("icon")
    let active = this.getAttribute("active")
    this.innerHTML = `
                <a href="#">
                    <span class="icon"><ion-icon name="${icon}"></ion-icon></span>
                    <span class="text">${name}</span>
                </a>
        `;
    this.classList.add("list")
    if(active==="true"){
      this.classList.add("active")
    }    
  }
}
if (!customElements.get("vkf-item-menu")) {
  customElements.define("vkf-item-menu", ItemMenu);
}

export default ItemMenu 