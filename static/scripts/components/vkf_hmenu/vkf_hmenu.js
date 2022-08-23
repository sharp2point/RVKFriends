import ItemMenu from "./vkf_item_menu.js";

class HMenu extends HTMLElement {
  connectedCallback() {
    let items_tmpl = [];
    let icons = this.getAttribute("icons").split(" ");
    let items = this.getAttribute("items").split(" ");
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
            <div class="items">
                ${items_tmpl[0]}
                ${items_tmpl[1]}
                ${items_tmpl[2]}
                ${items_tmpl[3]}
                ${items_tmpl[4]}                
                <div class="indicator"></div>
            </div>
            `;

    this.innerHTML+=`
        <style>
        .hmenu{
            position: relative;
            width: 400px;
            height: 70px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
        }
        .hmenu .items{
            display: flex;
            flex-direction: row;
            width: 350px;
        }
        .hmenu .items vkf-item-menu{
            position: relative;
            list-style:none;
            width: 70px;
            height: 70px;
            z-index: 1;
        }
        .indicator{
            position: absolute;
            width: 70px;
            height: 70px;
            background: #29fd53;
            top:-50%;
            border-radius: 50%;
            border: 6px solid var(--clr);
            transition: 0.5s;
        }
        .indicator::before{
            content:'';
            position: absolute;    
            top: 50%;
            left:-22px;
            width: 20px;
            height: 20px;
            background: transparent;
            border-top-right-radius: 20px;
            box-shadow: 0px -10px 0 0 var(--clr);
        }
        .indicator::after{
            content:'';
            position: absolute;
            top:50%;
            right: -22px;
            width: 20px;
            height: 20px;
            background: transparent;
            border-top-left-radius: 20px;
            box-shadow: 0px -10px 0 0 var(--clr);
        }
        .hmenu .items vkf-item-menu:nth-child(1).active ~ .indicator{
            transform: translateX(calc(70px*0));
        }
        .hmenu .items vkf-item-menu:nth-child(2).active ~ .indicator{
            transform: translateX(calc(70px*1));
        }
        .hmenu .items vkf-item-menu:nth-child(3).active ~ .indicator{
            transform: translateX(calc(70px*2));
        }
        .hmenu .items vkf-item-menu:nth-child(4).active ~ .indicator{
            transform: translateX(calc(70px*3));
        }
        .hmenu .items vkf-item-menu:nth-child(5).active ~ .indicator{
            transform: translateX(calc(70px*4));
        }
        </style>
    `;
  }
}
if (!customElements.get("vkf-hmenu")) {
  customElements.define("vkf-hmenu", HMenu);
}
