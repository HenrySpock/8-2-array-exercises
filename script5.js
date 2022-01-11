function holler() {
    console.log('HEY YOU!');
}

const whisper = function() {
    console.log('pssst I have a secret');
};

//In the following functions, x and y are parameters, unless you input numbers 
// for each, it returns NaN. 
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
function power(x,y){
    return x** y;
}

const mathFuncs = [add, subtract, multiply, divide, power];

nums = [2, 4, 6, 7, 9, 11, 15, 22];
const funcExec = [add(nums[0], nums[1]), subtract(nums[2], nums[3]), multiply(nums[4], nums[5]), divide(nums[6], nums[7])];
// above returns: [6, -1, 99, 0.6818181818181818]

// mathFuncs[2](nums[0], nums[1]);
// returns: 8

// Callbacks: Functions as Arguments

// setTimeout(func, amt of time)
// setTimeout(whisper, 5000);

// function doMath(x,y, mathFunc){
//     return mathFunc(x,y)
// };

// For instance, I could call: doMath(10,25,divide), which returns .4 - the function as argument does not use parenthesis. 
// In the above example, mathFunc is simply the internal name for whatever function you pass in (add, subtract, or 
// something else). It is not related to the array mathFuncs. If you want to use the array - to multiply, for instance - 
// then the function argument in this case would be mathFuncs[2]: doMath(7,9,mathFuncs[2]);

// Now with an anonymous function: 
// doMath(2,4,function(a,b){
//     console.log(a ** b);
// })

// Above, the callback function (anonymous function named function) itself has two arguments of a and b, which 
// are then utilized in the execution where a to the power of b is logged to the console. In this case, the 
// two arguments 2 and 4 for doMath are subsequently used by the anonymous function as arguments and b respectively.

// Now to utilize the mathFuncs array:
// function doAllMath(a,b,mathFuncs){
//     for(let func of mathFuncs){ //here, func is the interal variable for each index of mathFuncs, which gets called
//        console.log(func(a, b)) //to act upon a and b here. Without console.log, you won't see anything.
//     }
// }

// Another example of the above idea of callbacks would be:
// addEventListner('click', function(){}); where upon clicking the function argument is executed.

// Array methods that expect a callback function.
// ForEach()
// Loops through an array, calls function for every value in the array. It will always return undefined.

// let numbos = [1,2,3];  

// numbos.forEach(function(value, index, array){
// console.log(value);
// });

// 1
// 2
// 3
// undefined

// numbos.forEach(function(value, index, array){
// console.log(index);
// });

// 0
// 1
// 2
// undefined

// numbos.forEach(function(value, index, array){
// console.log(array);
// });

// (3) [1, 2, 3]
// (3) [1, 2, 3]
// (3) [1, 2, 3]
// undefined

// numbos.forEach(function(value, index, array){
// console.log(value, index);
// });

// 1 0
// 2 1
// 3 2
// undefined

// In the above examples:
// numbos.forEach(function(value,index,array){console.log(value, index)});
// numbos: name of array to be iterated by forEach 
// forEach: iterating method 
// function: anonymous function which takes a value, index, and array (presumably does not have to be anonymous)
// console.log: The function definition that forEach iterates, naming the arguments used.

const colors = ['teal', 'cyan', 'peach', 'purple'];

// colors.forEach(console.log) //the point here is you can use named functions, they do not have 
// to be anonymous, as explicitly stated. The output shows very clearly how when you declare
// a function in forEach, 3 arguments are passed to it: value, index and array. You do not have
// to use all of them, but you have access to them. 
// Value is the first argument that gets passed to the function in forEach, and is the most common to use. 
// So, from above, we take out console.log and do:
// colors.forEach(function(val, i, arr)) //this declares all the potential arguments - you do not need to do this, so:

// colors.forEach(function(val,){
//     console.log(val.toUpperCase());
// });

// Returns:
// TEAL 
// CYAN 
// PEACH 
// PURPLE

// colors.forEach(function(val, i){
//     console.log(i, val.toUpperCase());
// });

// returns: 
// 0 'TEAL'
// 1 'CYAN'
// 2 'PEACH'
// 3 'PURPLE'

// colors.forEach(function(val, i){
//     console.log(i, val.toUpperCase());
// });

// Writing the above as a function to call instead of anonymous:

function yell1(val){
    console.log(val.toUpperCase());
}

// colors.forEach(yell1);  
// returns:
// TEAL
// CYAN
// PEACH
// PURPLE

//The name of the array is itearted by the method forEach, which is taking the function yell as an argument.
//In turn, the yell function takes in a value as an arguement, and because it is passed to forEach, the 
//values are each index of the array [colors].

// Now we take the above, add the index as an argument, and log using template literals:
function yell2(val, i){
    const caps = val.toUpperCase();
    console.log(`At index ${i}, ${caps}`);
}

// colors.forEach(yell2);
// returns: 
// At index 0, TEAL
// At index 1, CYAN
// At index 2, PEACH
// At index 3, PURPLE

// These cannot be saved to variables. 

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
// prices.forEach(function(price){
//     total += price;
// });
// console.log(total);

// for... of... is a newer, simpler way to do this.AbortController

// for (let price of prices){
//     total += price;
// }
// console.log(total);

// For... of... however, is just a loop. forEach uses a callback function.

// As a traditional loop:
// for(let i = 0; i < prices.length; i++){
//     total+= prices[i];
// }

// "Write my own":
const painters = ['Monet', 'Corot', 'van Gogh', 'Guardi'];

// painters.forEach(function(val, i){
//     console.log(i, val.toUpperCase() + " humuna");
// });

// Output:
// 0 'MONET humuna'
// 1 'COROT humuna'
// 2 'VAN GOGH humuna'
// 3 'GUARDI humuna'
// undefined

// function myForEach(arr, callback){
//     for (let i = 0; i < arr.length; i++){ //initializing loop
//     callback(arr[i], i) //Defining the callback function. Notice the "i" here, this gets passed into the 
//     // callback function of myForEach; without it, the "i" below returns undefined.
//     }
// }

// myForEach(painters, function(painter, i){
//     console.log(i, painter.toUpperCase() + " humana");
// })


// Writing the above as passing the array into forEach with an anonymous function:

// painters.forEach(function(painter, i){
//     console.log(i, painter.toUpperCase() + " humana");
// })

// This is really the part i missed that wasn't making sense. 

// 1.
// doubleValues
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

function doubleValues(val){
    return (val * 2) ;
}

function yell1(val){
    console.log(val.toUpperCase());
}

function doubleValues(arr, callback){
    for (let i = 0; i < arr.length; i++){  
    callback(arr[i], i)  
    }
}

doubleValues([1,2,3], function(val, i){
    console.log(val*2);
})

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val * 2);
    });
    return newArr;
  }

 

  function tripleValues(arr){
      let newArray = [];
      arr.forEach(function(val) {
          newArray.push(val*3);
      });
      return newArray;
  }

//   tripleValues([1,2,3]);

//   2. Write a function called onlyEvenValues which accepts an array and returns a new array with 
// only the even values in the array passed to the function

// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]

function onlyEvenValues(arr){
    let newArray = [];
    arr.forEach(function(val) {
        if (val / 2 === 0){
        newArray.push(val)};
    });
    return newArray;
}

// MAP iterates on an array and returns a new array. Does not mutate original array.
//The callback function *must* return something, otherwise the new array will only have values of undefined.

// let numbers = [1,2,3];

// numbers.map(function(value, index, array){ //the funciton here is a callback, accepting value, index and array
//     return value * 10;
// }) // returns [10, 20, 30];

const numbers = [21, 37, 64, 99, 142];
const negatives = numbers.map(function(daValleyU){
    return daValleyU * -1;
}) //returns [-21, -37, -64, -99, -142];

const todos = [
    {
    id: 1, 
    text: 'walk the dog',
    priority: 'high'
    },
    {
    id: 2, 
    text: 'walk the chickens',
    priority: 'medium'
    },
    {
    id: 3, 
    text: 'feed the cats',
    priority: 'very high'
    },
    {
    id: 4, 
    text: 'put out the fire in my garage',
    priority: 'low'
    },
]

const textValue = todos.map(function(objectKey){
    return objectKey.text;
})

const links = Array.from(document.querySelectorAll('a'));

const linkArray = links.map(function(a){
    return a.href;
})

// let mapNum = [1,2,3];

function myMap(arr, callback){
    const newArr = [];
    for (let i=0; i<arr.length; i++){
        newArr.push(callback(arr[i], i, arr)); //the callback can take in arr[i] (value), i and arr - they may not 
        // all be used, but if they are required and not present the array returns undefined values.
    }
    return newArr;
};

const priorityMap = myMap(todos, function(todo){
    return todo.priority;
})

const repString = myMap(['a', 'b', 'c', 'd', 'e'], function(str, idx){
   return str.repeat(idx);
});

// FILTER 
// Creates Array 
// Loops through array 
// Runs a callback funciton on each value in the array 
// If the callback function returns true, that value is pushed to the new array. 
// If the callback function returns false, that value will not be included in the new array. 
// The result of the callback will always be evaluated into a boolean.

let letters = ['a', 'b', 'c', 'b', 'c']

letters.filter(function(value, index, array){
    return value === "b";
})

const words = [
    'immunoelectrophoretically',
    'rotavator',
    'tsktsk',
    'psychophysicotherapeutics',
    'squirrelled',
    'crypt',
    'uncopyrightable',
    'cysts',
    'pseudopseudohypoparathyroidism',
    'unimaginatively',
]

words.filter(function(word){ //annoymous callback function which is assigning word as variable
    // to the iterable in the array "words."
    return word.length >= 20;
}) // returns ['immunoelectrophoretically', 'psychophysicotherapeutics', 'pseudopseudohypoparathyroidism']

words.filter(function(word){  
    return word.includes("ryp");
}) //returns ["crypt"]

words.filter(function(word){  
    return !word.includes("ryp");
}) //returns ['immunoelectrophoretically', 'rotavator', 'tsktsk', 'psychophysicotherapeutics', 'squirrelled', 'uncopyrightable',
// 'cysts', 'pseudopseudohypoparathyroidism', 'unimaginatively',];

// The above does not work with "word.!includes", I take this to mean the not operator "!" goes before the iterable 
// rather than the method.

const wordsCU = words.filter(function(w){
    return w[0] === 'u' || w[0] === 'c';
});

const containsVowel = function(word){
    for(let char of word) { //iterating over each character in a word
        if(isVowel(char)) return true; //calling isVowel below on the character
    }
    return false; //if isVowel is never true, return false
}

const isVowel = function(char){
   return 'aeiou'.indexOf(char) !== -1;
} //isVowel("y") returns false, isVowel("a") returns true

const containVowels = words.filter(containsVowel);

const containNoVowels = words.filter(function(word){
    return !containsVowel(word)
}); 

//Notice that above the "not" operator acts on the function, but would not act on the method "includes".

const allCheckedBoxes = document.querySelectorAll('input[type="checkbox"]')

const checked = Array.from(allCheckedBoxes).filter(function(box){ //box is the internal variable for the iterable of the allCheckboxes nodelist
    return box.checked; //.checked is a property for checkboxes
})

const completedItems = checked.map(function(checkbox){ //this is mapping a new array from the "checked" created array
    return checkbox.parentElement.innerText; //using parentElement to find the innerText of each checked item
})

function extractCompletedTodos() {
    const allCheckedBoxes = document.querySelectorAll('input[type="checkbox"]')
    return Array.from(allCheckedBoxes)
    .filter(function(box){  
        return box.checked;  
    })
    .map(function(checkbox){
        return checkbox.parentElement.innerText;
    });
}