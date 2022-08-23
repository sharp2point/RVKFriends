export default {
    render(props){
        return `${this.html(props)}${this.css(props)}`
    },
    html(props){
        let opt = this.options(props.sortChoices)
        return `
            <div class="container">
                <h4> Sort Filter: </h4>
                ${opt}
            </div>
        `;
    },
    css(props){
        return `
        <style>
            .container{
                padding: 10px;
                background: #CCAFCC;
                border: 1px solid white;
                border-radius: 0.4em;
            }
            </style>
        `;
    },
    options(list){
        let choices= ``;
        list.forEach((item)=>{
            choices += `<option value=${item}> ${item} </option>`
        })
        return `<select> ${choices} </select>`
    }
}