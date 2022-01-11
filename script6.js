// I reworked all of the exercises from Advanced Array Methods to be slightly different. 
// I also made sure that when I wrote them I was able to talk it through without looking at something else.

// forEach 

// 1. doubleValues: I rewrote this as tripleValues.

function doubleValues(arr){
    let newArray = [];
    arr.forEach(function(val) {
        newArray.push(val*2);
    });
    return newArray;
}

// let forENum = [1,2,3,4,5,6];

// doubleValues([1,2,3]);
// doubleValues(forENum);

// Here, the above is reworked to return an array of numbers at triple the value. 

function tripleValues(arr){
    let newArray = [];
    arr.forEach(function(val) {
        newArray.push(val*3);
    });
    return newArray;
}

// let forENum = [1,2,3,4,5,6];

// tripleValues([1,2,3]);
// tripleValues(forENum);

//   2. Write a function called onlyEvenValues which accepts an array and returns a new array with 
// only the even values in the array passed to the function

// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]

function onlyEvenValues(arr){
    let newArray = [];
    arr.forEach(function(val) {
        if (val % 2 === 0){
        newArray.push(val);
    }
    });
    return newArray;
}

// Here, the above logic is reworked to add the present odd numbvers as values to iterated keys in an object.
// onlyOddValues([1,2,3]) // [2]
// onlyOddValues([5,1,2,3,10]) // [2,10]

function onlyOddValues(arr){
    let numObj = {};
    let i = 0; 
    arr.forEach(function(val) {
        if (val % 2 !== 0){
        i++;
        {numObj[i] = val};        
    }
    });
    return numObj;
}

// 3. showFirstAndLast
// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only 
// the first and last character of each string.

// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function showFirstAndLast(arr){
    let newArray = [];
    arr.forEach(function(val) {
        newArray.push(val.charAt(0) + val.charAt(val.length - 1));
    });
    return newArray;
}
 
// The above is rewritten to show only the inner characters of the word. 

function showMiddle(arr){
    let newArray = [];
    arr.forEach(function(val) {
        let mid1 = val.slice(1);
        // console.log(mid1);
        let mid2 = mid1.slice(0, mid1.length - 1);
        // console.log(mid2); 
        newArray.push(mid2);
    });
    return newArray;
}

// let someNames = ['colt','matt', 'tim', 'test'];
// showMiddle(['colt','matt', 'tim', 'test']);
// showMiddle(someNames);
 
// 4. addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array 
// passed to the function with the new key and value added for each object

addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
)

/*
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]
*/

function addKeyAndValue(arr, key, value){  //these are initial pass ins, in this case, array, title and instructor
    arr.forEach(function(val) { //this val represents each index in the array
        val.key = value; //could also be val[key] = value;
    })
    return arr
}

// This takes the above function and adds an iterated number for each instructor.

function addKeyAndEnumValue(arr, key, value){  //these are initial pass ins, in this case, array, title and instructor
    let i = 0;
    arr.forEach(function(val) { //this val represents each index in (arr)
        i++;
        val.key = value + " #" + i; //could also be val[key] = value;
    })
    return arr
}

// 5. 
// vowelCount
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel 
// and the values as the number of times the vowel appears in the string. This function should be case insensitive 
// so a lowercase letter and uppercase letter should count.

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}
 
function vowelCount(string) { //this is where the string is passed in
    let splitArr = string.split(""); //here the string is split into an array, and this is what is used from this point
    let obj = {}; //empty object to hold the vowel counts
    const vowels = "aeiou"; //list of letters for checking against
  
    splitArr.forEach(function(letter) { //this assigns a name to each index in the split array
      let lowerCasedLetter = letter.toLowerCase() //Making sure no letter is missed for case
      if (vowels.indexOf(lowerCasedLetter) !== -1) { //this is checking the "letter" assignment of splitArr against the consonants array, using each letter of consonants as a potential index, thus if "!== -1", this means the letter from splitArr exists in consonants.
        if (obj[lowerCasedLetter]) { //this is checking where the obj already has the current instance of lowerCasedLetter - 
            // if the letter already exists in the obj, then the count for that letter is incremented. If it does not already 
            // exist, then the count is set to 1.
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }

// Here the above function is rewritten to do a counter of consonants. 
  function consonantCount(string) {  
    let splitArr = string.split(""); 
    let obj = {}; 
    const consonants = "bcdfghjklmnpqrstvwxyz"; 
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (consonants.indexOf(lowerCasedLetter) !== -1) { 
        if (obj[lowerCasedLetter]) { 
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }

//   And here it's rewritten for the full alphabet and numbers 0-9.
// Here the above function is rewritten to do a counter of consonants. 
function characterCount(string) {  
    let splitArr = string.split(""); 
    let obj = {}; 
    const consonants = "abcdefghijklmnopqrstuvwxyz0123456789"; 
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (consonants.indexOf(lowerCasedLetter) !== -1) { 
        if (obj[lowerCasedLetter]) { 
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }

// Map 

// 1. doubleValuesWithMap
// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values 
// in the array passed to the function doubled.

doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
function doubleValuesWithMap(arr) {}

// Here is the original:
function doubleValuesWithMap(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

// And here I've added the index to the callback and used it in addition to multiplying by 2.: 

function doubleValuesPlusIndex(arr) {
  return arr.map(function(val, i) {
    return ((val * 2) + i);
  });
}
 
doubleValuesPlusIndex([1,2,3]) // [2,5,8]

// 2. valTimesIndex
// Write a function called valTimesIndex which accepts an array and returns a new array with 
// each value multiplied by the index it is currently at in the array.

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]

function valTimesIndex(arr) {
  return arr.map(function(val, i) {
    return val * i; 
  });
}

// Here the above fucntion takes the index and adds it as a power for the initial formula.  

function valTimesIdxPowerIdx(arr) {
  return arr.map(function(val, idx) {
    return (val * idx) ** idx; //This prompted me to look up "0 to the power of 0", about which there is some discussion.
    // But in JavaScript at least, 0**0 is indeed 1.
  });
}

valTimesIdxPowerIdx([1, 2, 3]); // [1, 2, 36]

// 3. 
// extractKey
// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the 
// value of that key in each object.

extractKey(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
)


function extractKey(arr, key) {
  return arr.map(function(val) { 
    return val[key];
  });
}

  // ['Elie', 'Tim', Matt', 'Colt']

// This takes the above function and puts the key concatenated with a string into a new array. 

function extractKeyToArr(arr, key) {
  let teachName = [];
  arr.map(function(val) { 
    
    teachName.push(val[key] + " is an Instructor");
  });
  return teachName;
}


extractKeyToArr(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
)

// 4. extractFullName
// Write a function called extractFullName which accepts an array of objects and returns a new array 
// with the value of the key with a name of “first” and the value of a key with the name of “last” in 
// each object, concatenated together with a space.

function extractFullName(arr) {
  return arr.map(function(val) { 
    return val.first + " " + val.last;
  });
}

/*
extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])


  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

// Below the function utilizes the index, increments it, flips the names and concats value, incremented index and strings.
function extractFullName(arr) {
  return arr.map(function(val, i) {
    i++; 
    return val.last + ", " + val.first + ", is teach #" + i++ + "." ;
  });
}

// filter 

// 1. filterByValue
// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that 
// contain that key.

// filterByValue(
// [
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia", isCatOwner: true},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele", isCatOwner: true}
// ],
// 'isCatOwner'
// )

/*
  [
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ]
  */

  function filterByValue(arr, key){
    return arr.filter(function(val){
      return val[key] !== undefined;
    });
  }
 
  // 2. find
  // Write a function called find which accepts an array and a value and returns the 
  // first element in the array that has the same value as the second parameter or 
  // undefined if the value is not found in the array.
  
  // find([1,2,3,4,5], 3) // 3
  // find([1,2,3,4,5], 10) // undefined

  function find(arr, val){
    return arr.filter(function(el){
      return val === el;
    })[0];
  }

//  3. findInObj
// Write a function called findInObj which accepts an array of objects, a key, and some value 
// to search for and returns the first found value in the array.

// findInObj(
//   [
//     {first: 'Elie', last:"Schoppik"},
//     {first: 'Tim', last:"Garcia", isCatOwner: true},
//     {first: 'att', last:"Lane"},
//     {first: 'Colt', last:"Steele", isCatOwner: true}
//   ],
//   'isCatOwner',
//   true
// )

// {first: 'Tim', last:"Garcia", isCatOwner: true}

function findInObj(arr, key, searchValue){
  return arr.filter(function(val){
    return val[key] === searchValue;
  })[0];
}

// 4. removeVowels
// Write a function called removeVowels which accepts a string and returns a new string with 
// all of the vowels (both uppercased and lowercased) removed. Every character in the new string 
// should be lowercased.

// removeVowels('Elie') // ('l')
// removeVowels('TIM') // ('tm')
// removeVowels('ZZZZZZ') // ('zzzzzz')

function removeVowels(str){  //function accepts a string
  const vowels = "aeiou"; //const to check against
  return str // building a return value
    .toLowerCase() //first making all case lower
    .split('') //now splitting into an array
    .filter(function(val){ //calling a filter function on that array
      return vowels.indexOf(val) === -1; //returning that letter from the array if it checks negative against the vowels const
    })
   .join(''); //rejoinging the array into a string
}

//below the above function checks for consonants:

function removeConsonants(str){  
  const consonants = "bcdfghjklmnpqrstvwxyz";  
  return str 
    .toLowerCase() 
    .split('') 
    .filter(function(val){ 
      return consonants.indexOf(val) === -1; 
    })
   .join(''); 
}

//below the above function respects case

function caseRemoveConsonants(str){  
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";  
  return str  
    .split('') 
    .filter(function(val){ 
      return consonants.indexOf(val) === -1; 
    })
   .join(''); 
}

// 5.
// doubleOddNumbers
// Write a function called doubleOddNumbers which accepts an array and returns a new array 
// with all of the odd numbers doubled (HINT - you can use map and filter to double and then 
//   filter the odd numbers).

// doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
// doubleOddNumbers([4,4,4,4,4]) // []

// Attempt:
// function doubleOddNumbers(arr){
//   return arr.filter(val){ //forgot my callback
//     return val % 2 !== 0
//   }
//   .map(arr){//forgot my callback both times and I would have had it 
//     return val * 2
//   } //parenthesis
// }

function doubleOddNumbers(arr) {
  return arr
  .filter(function(val) {
    return val % 2 !== 0
  })
  .map(function(val){
    return val * 2
  });
}

// Below we do evens instead, but also take them to the power of their index:

function doubleEvenNumbersPower(arr) {
  return arr
  .filter(function(val) {
    return val % 2 === 0
  })
  .map(function(val, idx){
    return (val * 2)**idx
  });
}