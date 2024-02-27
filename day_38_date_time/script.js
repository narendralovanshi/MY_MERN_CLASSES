// const str = "superman"
// const result = str.replace('u','U')
// console.log("brand new string=",result)
// const car = {
//     brand:'BMW',
//     price:'$23466',
//     headlight:4,
//     wheels:10
// }
// console.table(car)
// const  str = "superman is, belog from dc"
// console.log(str.split(' '))
// const result = str.split("")
// console.log(result);
// for (let i=0;i<result.length;i++){
//     let temp = result[i];
//     if(temp.toLocaleUpperCase()===result[i]){
//         console.log("upperCase words ", result[i]);

//     }
//     else{
//         console.log("lowerCase words ", result[i]);
//     }
// }

// const str =  "superman"
// console.log( str.slice(0,5))


// const str = "superman"
// console.log(str.substring(1,4));



// -Date and Time
setInterval(() => {const date = new Date ();
    const currentDate=date.getDate();
    const currentDay = date.getDay();
    const  year = date.getFullYear();
    const month = date.getMonth();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    console.log(`Today date is =${currentDate}-${month}-${year}`)
    console.log(`Today date is =`)
    
    const element = document.querySelector('h1')
    element.innerText=`${hours}:${minute}:${second}`
    element.style.color="white";
    console.log(element)
    
}, 1000);
