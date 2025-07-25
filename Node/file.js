
const fs = require("fs")


// Sync.. Blocking
const file = fs.writeFileSync("./sumant.txt","Hii I am Sumant Rai")

console.log(file);


// Async ... Non-Blocking
fs.writeFile("./Rai.txt","I Love You S", (error)=>{
    console.log(error);
    
})


// const result =  fs.readFileSync("./santosh.txt", "utf-8",{})

// console.log(result);


fs.readFile("./sumant.txt","utf-8",(err, result)=>{
    console.log(result);
    
})

const ap = fs.appendFileSync("./add.txt", `\nHii I am New Date${Date.now()}` )

