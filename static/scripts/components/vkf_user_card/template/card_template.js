export default {
    render(props){
        return `${this.html(props)}${this.css(props)}`;
    },
    html(p){ return `<div class="descript">
            <img src="${p.avatar}"/>
             <h4>${p.name}</h4>           
            <div class="counters">
                <span class="photo">P: ${p.photos}</span>
                <span class="friend">F: ${p.friends}</span>
            </div>
        </div>`;},
    css(p){ return `<style>
            .descript{
                display: flex;
                flex-direction: column;
                justify-content: center;
                item-align: center;
                font-size: 0.8em;
                padding: 0.2em;
                border: 5px solid white;
            }
            .descript h4{
                position: relative;
                top:-50px;
                z-index:10;
                color: #FFFFFF;
                text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            }
            .descript img{
                position: relative;
                margin: 0 auto;
                width: 90px;
                height: 90px;
                object-fit: cover;
            }
            .descript .counters{
                position: relative;
                top: -50px;
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