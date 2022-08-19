class Friends{
    constructor(){
        this.count
        this.items
    }
    static fromJson(json){
        return Object.assign(new Friends(),json)
    }
}

export { Friends } 