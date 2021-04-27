// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function greeting(greet) {
  const yourGreeting = greet;
  const name = "John";
  console.log(`${yourGreeting}, How are you!`)
  
  function reply() {
    const reply = "Great, thank you!"
     console.log(`${yourGreeting} ${name}! ${reply}`) 
    }

  reply()
}

console.log(greeting("Hey"))

// Another simpler example

function sayHello(name) {
  function yell() {
    return name.toUpperCase()
  }
  return yell()
}

// Anotheer one! (DJ Khaled voice!)
console.log(sayHello("Joshua"))

function quiet(name) {
  function shh() {
    return `Shhh, ${name}`
  }
  return shh()
}

console.log(quiet("Jacob"))
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  function counting(num) {
    return count.push(console.log(num++))
  }

};


console.log(counter()) // 1
console.log(counter()) // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
