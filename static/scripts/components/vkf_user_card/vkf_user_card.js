
class UserCard extends HTMLElement{
    connectedCallback(){
        const name = this.getAttribute("name")
        const avatar = this.getAttribute("avatar")
        const counters = JSON.parse(this.getAttribute("counters").replaceAll('\'','\"'))

        this.innerHTML = `
            <div class="content">
                <img src="${avatar}"/>
                <div class="info">
                    <span class="name">${name}</span>
                    <span class="photos">${counters["photos"]}</span>
                    <span class="friends">${counters["friends"]}</span>
                </div>
            </div>
        `;
        this.innerHTML+=`
            <style>
                .content{
                    display: flex;
                    flex-direction: row;
                    justify-content: left;
                    width: 100%;
                    height: 100%;
                }
                .content img{
                    width: 50px;
                    height: 50px;
                    margin:0.1em;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .content .info{
                    display: flex;
                    flex-direction: row;
                    justify-content: left;
                    item-align: center;
                    height: 50px;
                    width: 80%;
                }
                .content .info span{
                    margin-left:5px;
                    height: 50px;
                    min-width: 60px;   
                    line-height: 50px;  
                    font-size: 0.8em;  
                    font-weight: 600;
                    text-align: center;             
                }
                .content .info span.name{
                    width: 30%;                  
                }
                .content .info span.photos{
                    background: #F1CCCC;                  
                }
                .content .info span.friends{
                    background: #CCF2CC;                  
                }
            </style>
        `;
    }
}
if(!customElements.get("vkf-user-card")){
    customElements.define("vkf-user-card", UserCard)
}

export default UserCard;