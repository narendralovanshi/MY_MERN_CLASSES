console.log("hello")
// const element  = document.getElementsByTagName("h1")
// const  element2 = document.getElementsByClassName("h2")
// const element3 = document.getElementById("h3")
// console.log(element)
// console.log(element2)
// console.log(element3)


// const element  = document.querySelectorAll("h1")
// const element2  = document.querySelector(".h2")
//  const element3  = document.querySelector("#h3")

// console.log(element)
//  console.log(element2)
//  console.log(element3)

// const element = document.querySelector(".container")
// element.innerHTML="<h1>this is my dynamic container</h1>"
// element.innerText= "<h1>this is my dynamic container</h1>"
// console.log(element)

// const element = document.querySelector("h1")
// document.querySelector('.container').innerText = h1.innerText

// const image = document.querySelector("img")
// image.src="https://cdn.pixabay.com/photo/2024/02/17/13/38/huts-8579309_640.jpg"


// const element = document.querySelector("h1")
// element.style.color = "red"

const element = document.querySelector("body")
const image = document.querySelector("img")
const bgLight = ()=>{
    element.style.backgroundColor= "white"
    element.style.color = "black"
    image.src="https://cdn.pixabay.com/photo/2024/02/17/13/38/huts-8579309_640.jpg"

}
const bgdark = ()=>{
    element.style.backgroundColor= "black"
    element.style.color = "white"
    image.src="https://cdn.pixabay.com/photo/2024/02/22/09/04/warehouse-8589487_640.jpg"
}
