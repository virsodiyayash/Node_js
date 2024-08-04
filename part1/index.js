const app = require('./app');

// var a = 20;
// var b = 30;
// var c = 40;

// console.warn(a + b + c);

console.log(app.z());


const arr = [2 , 5 , 8 , 4 , 1 , 5 , 9 , 3 , 6 , 0 , 7 , 3 , 5 , 9];

// arr.filter((item) => {
//     console.log(item);
// })

// let result = arr.filter((item) => {
//     return item===3
// })

let result = arr.filter((item) => {
    return item>3
})
console.log(result);