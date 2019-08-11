// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const name = "John"
function speak (){
  let age =25;
  console.log (`My name is ${name} and I am ${age} years old`);
};
speak();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const counter = () => {
  let count = 0;
  return ()=>{
    return ++count;
  }
};
const newCounter= counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const counterFactory = () => {
    let count = 0;
    console.log(count);
    let increment  =  () => count += 1;
    let decrement  = () => count -= 1;
    let newCount = {increment, decrement};
    };
    const newCount=counterFactory();
    console.log(newCount);

