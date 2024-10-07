//By using arrow function
let addition=num=>new Promise((resolve,reject)=>resolve(num+10))
let subtraction=num=>new Promise((resolve,reject)=>resolve(num-5))
let multiplication=num=>new Promise((resolve,reject)=>resolve(num*3))
let division=num=>new Promise((resolve,reject)=>resolve(num/2))
addition(10).then(add=>subtraction(add))
            .then(sub=>multiplication(sub))
            .then(mul=>division(mul))
            .then(data=>console.log(data))
// By using anonymous function
let add = function(num) {
    return new Promise(function(resolve, reject) {
      resolve(num + 10);
    });
  };
  let sub = function(num) {
    return new Promise(function(resolve, reject) {
      resolve(num - 5);
    });
  };
  let mul = function(num) {
    return new Promise(function(resolve, reject) {
      resolve(num * 3);
    });
  };
  let div = function(num) {
    return new Promise(function(resolve, reject) {
      resolve(num / 2);
    });
  };
  add(10)
    .then(function(addres) {
      return sub(addres); 
    })
    .then(function(subres) {
      return mul(subres); 
    })
    .then(function(mulres) {
      return div(mulres);
    })
    .then(function(data) {
      console.log(data);
    });