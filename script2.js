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

words.some(function(word){
    return word.length > 25;
}) //true

words.some(function(word){
    return word.indexOf('thyroid') !== -1
}) //true

words.every(function(w){
    return w.length >= 5;
})

function allStrings(arr){
    return arr.every(function(el){
        return typeof el === 'string'
    })
} //allStrings(words) returns true
//allStrings(['a', 'b', 'c', 4]) returns false

const btn = document.querySelector('button');
btn.addEventListener('click', function(e){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(function(checkbox){
        return checkbox.checked;
    });
    if(!allChecked) alert("PLEASE CONSIGN YOURSELF, MORTAL");
})

// function mySome(arr, callback){
//   for (let i=0; i<arr.length; i++){
//       if(callback(arr[i], i, arr)) return true;
//   }   
//   return false
// }

// mySome([4,5,6,7], function(n){
//     return n > 5;
// })

// function myEvery(arr, callback){
//     for (let i=0; i<arr.length; i++){
//         if(!callback(arr[i], i, arr)) return false;
//     }   
//     return true;
//   }
  
//   myEvery([4,5,6,7], function(n){
//       return n > 5;
//   })



//   Some / Every Exercise
// 1.
// hasOddNumber
// Write a function called hasOddNumber which accepts an array and returns true if the array contains at least 
// one odd number, otherwise it returns false.

// hasOddNumber([1,2,2,2,2,2,4]) // true
// hasOddNumber([2,2,2,2,2,4]) // false

// function hasOddNumber(arr){
//     return arr.some(function(val){
//         return val % 2 !== 0;
// })
// }

// 2. hasAZero
// Write a function called hasAZero which accepts a number and returns true if that number contains at 
// least one zero. Otherwise, the function should return false

// hasAZero(33321232131012) // true
// hasAZero(1212121) // false

// function hasAZero(num){
//     return num.toString().split('').some(function(val){
//         return val === '0';
// })
// }

// 3. hasOnlyOddNumbers
// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number 
// in the array is odd. If any of the values in the array are not odd, the function should return false.

// hasOnlyOddNumbers([1,3,5,7]) // true
// hasOnlyOddNumbers([1,2,3,5,7]) // false

// function hasOnlyOddNumbers(arr){
//     return arr.every(function(val){
//         return val % 2 !== 0;
// })
// }

// 4. hasNoDuplicates
// Write a function called hasNoDuplicates which accepts an array and returns true if there are 
// no duplicate values (more than one element in the array that has the same value as another). 
// If there are any duplicates, the function should return false.

// hasNoDuplicates([1,2,3,1]) // false
// hasNoDuplicates([1,2,3]) // true

// function hasNoDuplicates(arr){
//     return arr.every(function(val){
//       return arr.indexOf(val) === arr.lastIndexOf(val);
//     });
// }

// 5. hasCertainKey
// Write a function called hasCertainKey which accepts an array of objects and a key, and returns 
// true if every single object in the array contains that key. Otherwise it should return false.

// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

// //   hasCertainKey(arr,'first') // true
// //   hasCertainKey(arr,'isCatOwner') // false

//   function hasCertainKey(arr, key){
//     return arr.every(function(val){
//         return key in val;
// })
// }

// 6. hasCertainValue
// Write a function called hasCertainValue which accepts an array of objects and a key, 
// and a value, and returns true if every single object in the array contains that value 
// for the specific key. Otherwise it should return false.

// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//   hasCertainValue(arr,'title','Instructor') // true
//   hasCertainValue(arr,'first','Elie') // false

//     function hasCertainValue(arr, key, value){
//     return arr.every(function(val){
//         return val[key] === value;
// })
// }