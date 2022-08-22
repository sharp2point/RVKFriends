import ItemMenu from "./vkf_item_menu.js";

class HMenu extends HTMLElement {
  connectedCallback() {
    let items_tmpl = [];
    let icons = this.getAttribute("icons").split(' ');
    let items = this.getAttribute("items").split(' ');
    for (let i = 0; i < items.length; i++) {
      if (i === 0) {
        items_tmpl.push(
          `<vkf-item-menu active="true" name="${items[i]}" icon="${icons[i]}"></vkf-item-menu>`
        );
      } else {
        items_tmpl.push(
          `<vkf-item-menu name="${items[i]}" icon="${icons[i]}"></vkf-item-menu>`
        );
      }
    }
    this.innerHTML = `
        <div class="menu-sort">
            <ul>
                ${items_tmpl[0]}
                ${items_tmpl[1]}
                ${items_tmpl[2]}
                ${items_tmpl[3]}
                ${items_tmpl[4]}                
                <div class="indicator"></div>
            </ul>
        </div>`;
  }
}
if (!customElements.get("vkf-hmenu")) {
  customElements.define("vkf-hmenu", HMenu);
}
