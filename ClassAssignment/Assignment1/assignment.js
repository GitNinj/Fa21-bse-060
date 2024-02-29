// Array Methods

// **Accessing elements:**
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple

// **Adding elements:**
fruits.push("grape"); // Add to the end
fruits.unshift("mango"); // Add to the beginning
console.log(fruits); // Output: ["mango", "apple", "banana", "orange", "grape"]

// **Removing elements:**
fruits.pop(); // Remove from the end
fruits.shift(); // Remove from the beginning
console.log(fruits); // Output: ["apple", "banana", "orange"]

// **Searching elements:**
const index = fruits.indexOf("banana");
console.log(index); // Output: 1

// **Checking if an element exists:**
console.log(fruits.includes("apple")); // Output: true
console.log(fruits.includes("cherry")); // Output: false

// **Iterating through elements:**
fruits.forEach(fruit => console.log(fruit)); // Output: apple, banana, orange

// **Sorting elements:**
fruits.sort(); // Sort alphabetically
console.log(fruits); // Output: ["apple", "banana", "orange"]

// **Combining arrays:**
const numbers = [1, 2, 3];
const combined = fruits.concat(numbers);
console.log(combined); // Output: ["apple", "banana", "orange", 1, 2, 3]

// **Extracting a portion of the array:**
console.log(fruits.slice(1, 3)); // Output: ["banana", "orange"]

// **Removing elements from a specific index:**
fruits.splice(2, 1); // Remove element at index 2, and 1 element
console.log(fruits); // Output: ["apple", "banana"]

// **Creating a new array with elements that pass a test:**
const filteredNumbers = numbers.filter(num => num % 2 === 0); // Filter even numbers
console.log(filteredNumbers); // Output: [2]

// **Transforming an array with a function:**
const doubledFruits = fruits.map(fruit => fruit + " pie"); // Create new array with " pie" appended
console.log(doubledFruits); // Output: ["apple pie", "banana pie", "orange pie"]

// **Reducing an array to a single value:**
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // Sum elements
console.log(sum); // Output: 6

// **Finding the first element that meets a condition:**
const firstOrange = fruits.find(fruit => fruit === "orange"); // Find the first "orange"
console.log(firstOrange); // Output: orange

// **Finding the index of the first element that meets a condition:**
const orangeIndex = fruits.findIndex(fruit => fruit === "orange"); // Find the index of "orange"
console.log(orangeIndex); // Output: -1 (not found in the modified fruits array)

// **Joining elements into a string:**
const fruitString = fruits.join(", "); // Join elements with a comma and space separator
console.log(fruitString); // Output: apple, banana


// String Methods

// **Getting information about the string:**
const message = "Hello, world!";
console.log(message.length); // Output: 13

// **Accessing individual characters:**
console.log(message.charAt(0)); // Output: H

// **Finding a substring:**
console.log(message.indexOf("world")); // Output: 7

// **Converting to uppercase/lowercase:**
console.log(message.toUpperCase()); // Output: HELLO, WORLD!
console.log(message.toLowerCase()); // Output: hello, world!

// **Trimming whitespace:**
console.log(message.trim()); // Output: "Hello, world!" (removes leading/trailing spaces)

// **Extracting a substring:**
console.log(message.substring(7, 12)); // Output: "world"

// **Replacing a substring:**
console.log(message.replace("world", "everyone")); // Output: "Hello, everyone!"

// **Splitting the string into an array:**
console.log(message.split(" ")); // Output: ["Hello,", "world!"]

// **Checking if a string starts/ends with a specific substring:**
console.log(message.startsWith("Hello")); // Output: true
console