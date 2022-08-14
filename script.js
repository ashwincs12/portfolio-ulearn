// // alert("hello"); //for testing whether scrit linked to html
// console.log("Hello Boy"); //for printing

// var variable1; //declare variable
// let variable2; //declare variable inside loops
// const pi=3.14; //declaring constants 

// //functions-normal
// var a=5;
// var b=10;
// add(5,10);
// //meth1
// function add(x,y)
// {
//     let sum=x+y;
//     console.log(sum);
// }

// //meth2-anonymous 
// var add=function(x,y)
// {
//     return x+y;
// }
// console.log(add(20,5));

// //meth3-arrow function
// var sum=(x,y) => x+y; //no parameters and braces

// console.log(sum(50,55));

// //object literals
// var car={name:"BMW",engine:"m6",year:2005};
// console.log(car);
// console.log(car.engine);

// var age=
// {
//     dob:2002,
//     curyear:2022,
//     calcage: function()
//         {
//             return this.curyear-this.dob;
//         }
// };
// console.log(age.calcage())

//arrys
cars=['bmw','mercedes','porche','astinmartin','volkswagon'];
console.log(cars);
bikes=new Array('kawasaki','dukati','splendor','hyabusa');
console.log(bikes[3]);

bikes.push('KTM') //add element to array
console.log(bikes)

bikes.pop() //removes last element
console.log(bikes)

//.map() - assigned to a variable/array to which anonymous function is assigned
newcars=cars.map((i)=>{return i+' car'})
console.log(newcars)
//syntax- newarray=oldarray.map((parameter)=> {return parameter+defition})

//.filter() - to push elements to a new array on the basis of a condition given in the function
arr=[4,15,28,38,43,59]
newarr=arr.filter((i)=>i>30)
console.log(newarr)

