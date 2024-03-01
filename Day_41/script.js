// const element = document.querySelector(".container")
// console.log(element.childNodes)
// console.log(element.children)
// console.log(element.firstElementChild)
//  console.log(element.lastElementChild)



// const child2   = document.querySelector(".chaild2")
// console.log(child2.innerHTML)
// console.log(child2.previousElementSibling.innerHTML)
// console.log(child2.nextElementSibling.innerHTML)


const  button = document.createElement("button")



document.querySelector('button').addEventListener(
   "click" ,() => {const div = document.createElement('h1')
   const button = document.createElement('button')
   // div.className='suerman'
   div.setAttribute('class', "superman")
   div.innerText = 'this is my text'
   div.style.backgroundColor = "purple"
   console.log("this is div", div)
   console.log("this is div=", div.innerText)
   document.querySelector('body').appendChild(div)
   
     })
  


// const btn = document.createElement("button")
// // const  createText = document.createTextNode('Add Element')
// button.innerText = "add element"
// button.setAttribute('class',btn)
// document.querySelector ('body').appendChild(button)
// btn.addEventListener("click",()=>{
    
// })