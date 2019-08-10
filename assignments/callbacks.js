// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  //Given this problem: 
  // firstItem passes the first item of the given array to the callback function.
  function firstItem(arr, callback) {
    callback(arr[0]);
  }
   firstItem(items, (first) => {
    console.log(first);
   });


  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });



// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  cb(arr.length);
}
getLength(items, (length) => {
  console.log(length);
});


// last passes the last item of the array into the callback.
function last(arr, cb) {
  cb(arr.slice(-1)[0]);
}
last(items, (lastItem)=>{
  console.log(lastItem);
});


// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  cb(x+y);
}
sumNums(4,6, (sum)=>{
  console.log(sum);
});


// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  cb(x*y);
}
multiplyNums(4,6, (multiply)=>{
  console.log(multiply);
});


 // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
 cb(list.includes(item));
}
contains("Gum", items, (finder)=>{
  console.log(finder);
});

/* STRETCH PROBLEM */
 // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
let numbers = [78, 3, 56, 99, 3, 56, 77, 99.77, 87, 32, 42]

function removeDuplicates(array, cb) {
  cb(numbers.map(arr, indexOf));
}
removeDuplicates(numbers, (remove)=>{
  console.log(remove);
});

numbers.filter(distinct)
for (let i = 0; i < numbers.length; i++) 
  { for (let j = i + 1 ; j < numbers.length; j++)
     { if (numbers[i].equals(numbers[j])) { }
     }
  }