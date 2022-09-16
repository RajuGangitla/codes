//  promise
// let x=100
// let pr= new Promise(function(req,res){
//     if(x>200){
//         req("My data is good")
//     }
//     else{
//         res("data is not good")
//     }
// })

// pr.then(
//     function(value){
//         console.log(" the value is :",value)
//     },
//     function(err){
//         console.log("error :",err)
//     }
// )


// classes
// class rectangle{
//     constructor(length,breadth){
//         this.l=length
//         this.b=breadth
//     }
//     area(){
//         return this.l*this.b;
//     }
// }
// let p=new rectangle(22,3)
// console.log(p.area());

// Inheritance
// class car{
//     constructor(){
//         this.carname="Audi"
//         this.model="2019"
//         this.seats="4"
//     }
//     howOld(){
//         return 2022-this.model
//     }
// }

// class wheels extends car{
//     constructor(){
//         super()
//         this.noofWheels=4
//     }
//     ageofWheels(){
//         return this.noofWheels
//     }
// }
// let a=new wheels
// console.log(a.ageofWheels())

// server creation
let http=require("http")

let server=function(req,res){
    res.writeHead=200
    res.end("Hi this is live server")
}
let s1=http.createServer(server)
s1.listen(8000)
console.log("server is listening")