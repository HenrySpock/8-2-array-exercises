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