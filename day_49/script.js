// // const heros = {
// //     name:"superman",
// //     age: 400,
// //     salary:  9877979,
// //     company:function(){
// //         return this
// //     }
// // }
// // console.log(this)
// // console.log(heros)


// // constructor function'
// function product(name,price,quentity){

// this.name = name,
// this.price = price
// return this
// }
// product.prototype.brandname = "apple"
// product.prototype.quentity = 20;
// product.prototype.price= 30;
// product.prototype.shell = function(){
//     return 20;
// }




// const p1 =new product('macbook',1233,4)
// const p2 = new product('hp',3435,5)

// console.log(p1.brandname,p1.price)
// console.log(p2)

class car {
    constructor(brandname, price, color) {
        this.brandname = brandname
        this.price = price
        this.color = color
    }

    display() {
        console.log(`this is brand name =${this.brandname}and price = ${this.price} and color = ${this.color}`)
    }
}

const c1 = new car("bmw", 767468848, "blue")
c1.display();

class BMW extends car{
    constructor(power,wheels,brandname, price, color){
        super(brandname, price, color);
        this.wheels= wheels
        this.power = power
    }
    displayBMW(){
        this.display();
        console.log(
            console.log(`this is brand name =${this.brandname}and price = ${this.price} and color = ${this.color}
            and wheels = ${this.wheels} and power= ${this.power}`)
        )
    }
}
