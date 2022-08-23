export default {
    render(props){
        return `${this.html(props)}${this.css(props)}`;
    },
    html(p){ return `<div class="descript">
            <h4>${p.name}</h4>
            <img src="${p.avatar}"/>
            <div class="counters">
                <span class="photo">P: ${p.photos}</span>
                <span class="friend">F: ${p.friends}</span>
            </div>
        </div>`;},
    css(p){ return `<style>
            h4{
                font-size: 0.8em;
            }
            .descript{
                display: flex;
                flex-direction: column;
                justify-content: center;
                item-align: center;
                padding: 0.2em;
            }
            .descript img{
                width: 50px;
                height: 50px;
                border-radius: 50%;

            }
            .descript .counters{
                height: 60px;
                width: 90%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                item-align: center;
            }
            .descript .counters span{
                display: block;
                width: 90%;
                height: 40%;
                margin: 3px;
                border: 1px solid black;
                text-align: center;
                line-height: 25px;
                font-size: 0.7em;
                font-weight: 800;
            }
            .descript .counters span.photo{
                background: #AFCCCC;
            }
            .descript .counters span.friend{
                background: #CCCCAF;
            }
        </style>`;}

}