class ItemMenu extends HTMLElement {
  connectedCallback() {
    let name = this.getAttribute("name");
    let icon = this.getAttribute("icon");
    let active = this.getAttribute("active");
    this.innerHTML = `
          <a href="#">
            <span class="icon"><ion-icon name="${icon}"></ion-icon></span>
            <span class="text">${name}</span>
          </a>
        `;
    this.classList.add("list");
    if (active === "true") {
      this.classList.add("active");
    }

    this.innerHTML += `
    <style>
        a{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          text-align: center;
          font-weight: 500;
        }
        a .icon{
            position: relative;
            display: block;
            line-height: 75px;
            font-size: 1.5em;
            text-align: center;
            transition: 0.5s;
            color: var(--clr);
        }
        .active a .icon{
            transform: translateY(-35px);
        }
        a .text{
            position: absolute;
            color: var(--clr);
            font-weight: 400;
            font-size: 0.75em;
            letter-spacing: 0.05;
            transition: 0.5s;
            opacity: 0;
            transform: translateY(20px);
        }
        .active a .text{
            opacity: 1;
            transform: translateY(10px);
        }
      </style>
    `;
  }
}
if (!customElements.get("vkf-item-menu")) {
  customElements.define("vkf-item-menu", ItemMenu);
}

export default ItemMenu;
