console.log("hello console")
// const conatiner = document.querySelector(".container")
// // console.log(conatiner)

// const items = document.querySelector(".items:nth-child(1)")

// // item.innerHTML = "narendra"
// // item.style.color= "red"
// items.style.backgroundColor= "red"
// console.log(items.innerText)
// console.log(items.innerHTML)
// console.log(items.textContent)
const button  = document.querySelector("button")
const items =document.querySelectorAll(".items")
console.log(items)


const change=()=>{for (let i=0;i<items.length;i++){
    items[i].style.color = "red"
}
// items.style.color = "red"
}

const btn = document.querySelector("#btn").addEventListener("click",change)
const input = document.querySelector("#input");
const getInputvalue=()=>{
    console.log(input.value)
}















