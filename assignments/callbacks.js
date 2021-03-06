// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Gum'];


  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, length => {
  console.log(length)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, last => {
  console.log(last)
})

// another way to accomplish what was done in the first last function
function last2(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.slice(-1));
}


last2(items, last => {
  console.log(last)
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}

sumNums(3,4, sum => {
  console.log(sum)
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y)
}

multiplyNums(2,3, multiply => {
  console.log(multiply)
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
 if (list.includes(item)) {
   return cb(true);
 } else {
   return cb(false);
 }
}

contains("yo-yo", items, result => {
  console.log(result)
});

// Doesn't invole the callback, anoother way to get the job done
function contains2(item, list) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i = 0; i < list.length; i++) {
    if (item === "Pencil" || item === "Notebook" || item === "yo-yo" || item === "Gum") {
      return true
    } else {
      return false
    }
  }
}

console.log(contains2("Notebook", items))


/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   let free = [];
//   array.filter(item => {
//     if (!item === item) {
//     return item
//   }})
//   return cb(free.push(array));
  
// }

// removeDuplicates(items, noDuplicates => {
//   console.log(noDuplicates)
// });