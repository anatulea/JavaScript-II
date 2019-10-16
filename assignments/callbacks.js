// Create a higher order function and invoke the callback function to test your work.
// You have been provided an example of a problem and a solution to see how this works 
//with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



//Given this problem: 
// firstItem passes the first item of the given array to the callback function.
function firstItem(arr, callback) {
  callback(arr[0]);
}
firstItem(items, (first) => {
  console.log(first);
});

//----Short way----
const itemFirst = (arr)=>{return arr[0]}
console.log("SHORT WAY:",itemFirst(items));

// Potential Solution:

// Higher order function using "cb" as the call back
function firstItem(arr, cb) {
  return cb(arr[0]);
}

// Function invocation 
firstItem(items, function (first) {
  console.log(first)
});



// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  cb(arr.length);
}
getLength(items, (length) => {
  console.log(length);
});
//----Short way----
const lengthGet =(arr)=>{return arr.length}
console.log("SHORT WAY:",lengthGet(items));

// last passes the last item of the array into the callback.
function last(arr, cb) {
  cb(arr.slice(-1)[0]);
}
last(items, (lastItem) => {
  console.log(lastItem);
});

//----Short way----
const lastItem =(arr)=>{return arr.slice(-1)[0]};
//OR const lastItem =(arr)=>arr.slice(-1)[0];-- because we have a single 
//return we can delete the paranthesis and the retun key word
const lastItem2 =(arr)=>{return arr[arr.length-1]};
//or const lastItem2 =(arr)=>arr[arr.length-1];

console.log ("Last item short way using slice",lastItem(items))
console.log ("Last item short way using arr.length-1",lastItem2(items))

// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  cb(x + y);
}
sumNums(4, 6, (sum) => {
  console.log(sum);
});
//-----short way-----
const numbSum =(x,y) => x+y;
console.log("short way sum",numbSum(9,4));

// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  cb(x * y);
}
multiplyNums(4, 6, (multiply) => {
  console.log(multiply);
});
//-----short way-----
const numbMultiply =(x,y) => x*y;
console.log("short way multiply",numbMultiply(9,4));

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  cb(list.includes(item));
}
contains("Gum", items, (finder) => {
  console.log(finder);
});


//----short way--------
const isPresent= (item, arr)=> arr.includes(item);
console.log("Is present:", isPresent("Gum", items));

/* STRETCH PROBLEM */
// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.
let arr = [78, 3, 56, 99, 3, 56, 77, 99, 77, 87, 32, 42];

let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);

console.log(unique);


