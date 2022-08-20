let headList = document.querySelectorAll(".u-name");
let fcount = document.querySelector(".f-count");
let rcount = document.querySelector(".r-count");
console.log(`All: ${fcount.textContent} ---> Loaded: ${rcount.textContent}`)

setTimeout(()=>{
    if(headList.length < parseInt(fcount.textContent)){
        window.location.href = "/vk_friends"
    }},1000)

