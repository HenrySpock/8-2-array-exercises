// const nums = [20,30,50,12,-2,45,99,19,22,85];
// const nums2 = [1,2,3,4,5,6,7,8,9,10];

// let total = 0;
// for (let num of nums) {
//     total += num;
// }
// console.log(total);

// let min = nums[0];
// for(let i = 1; i < nums.length; i++){
//     if (nums[i] < min) min = nums[i];
// }
// console.log(min);

// const str = "lollapalooza";
// const charFreq = {};
// for(let char of str){
//     if(charFreq[char]){
//         charFreq[char] += 1;
//     }
//     else {
//         charFreq[char] = 1;
//     }
// }

// nums.reduce(function(accumulator, nextValue){
//     return accumulator + nextValue;
// });

// const words = ['Hello, ', 'I ', 'love ', 'you ', "won't ", 'you ', 'tell ', 'me ', 'your ', 'name?'];
// words.reduce(function(accum, nextWord){
//     console.log(accum, nextWord);
//     return accum + nextWord;
// })

// const midtermScores = [22,34,70,88,93,94,64,62,56];
// const finalScores = [44,80,98,83,84,74,72,66];

// midtermScores.reduce(function(min, nextScore){
//     if (nextScore<min){
//         return nextScore;
//     }
//     return min;
// })

// Above written as ternary:
// const minMidtermScore = midtermScores.reduce(function(min, nextScore){
//     return nextScore < min ? nextScore : min;
// })

// const maxScore = midtermScores.reduce(function(max, nextScore){
//     return nextScore > max ? nextScore : max;
// })

//A second value in .reduce initializes the accumlator

// const minFinalScore = finalScores.reduce(function(min, nextScore){
//     return nextScore < min ? nextScore : min;
// }, minMidtermScore);
//adding minMidtermScore as a second parameter means the lowest score of midtermScores is the initial value of the accumlutaor, 
// or "min", and in this case there is no lower number in finalScores than the midtermScores low score. 

// Exercises:
// 1. extractValue
// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value 
// of each object at the key.

// const teacherArray = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
// extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']

// function extractValue(arr, key){
//     return arr.reduce(function(newArray, next){
//         newArray.push(next[key]);
//         return newArray;
//     }, []);
// } 

// 2. vowelCount
// Write a function called vowelCount which accepts a string and returns an object with the keys 
// as the vowel and the values as the number of times the vowel appears in the string. 
// This function should be case insensitive so a lowercase letter and uppercase letter should 
// count.called

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

// function vowelCount(str){
//     const vowels = "aeiou";
//     return str.split('').reduce(function(acc,next){
//         let lowerCased = next.toLowerCase()
//         if(vowels.indexOf(lowerCased) !== -1){
//             if(acc[lowerCased]){
//                 acc[lowerCased]++;
//             } else {
//                 acc[lowerCased] = 1;
//             }
//         }
//         return acc;
//     }, {});
// }

// 3. addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects and returns the 
// array of objects passed to it with each object now including the key and value passed to the 
// function.

// const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

// addKeyAndValue(arr, 'title', 'Instructor') 

// [
//   {title: 'Instructor', name: 'Elie'},
//   {title: 'Instructor', name: 'Tim'},
//   {title: 'Instructor', name: 'Matt'},
//   {title: 'Instructor', name: 'Colt'}
// ]

//   function addKeyAndValue(arr, key, value){
//     return arr.reduce(function(acc,next,idx){
//         acc[idx][key] = value;
//         return acc;
//     },arr);
// }

// 4. partition
// Write a function called partition which accepts an array and a callback and returns an array with two 
// arrays inside of it. The partition function should run the callback function on each value in the array 
// and if the result of the callback function at that specific value is true, the value should be placed in 
// the first subarray. If the result of the callback function at that specific value is false, the value 
// should be placed in the second subarray.

// function isEven(val){
//   return val % 2 === 0;
// }

// const arr = [1,2,3,4,5,6,7,8];

// partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];

// function isLongerThanThreeCharacters(val){
//   return val.length > 3;
// }

// const names = ['Elie', 'Colt', 'Tim', 'Matt'];

// partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]

// function partition(arr, cb){
//     return arr.reduce(function(acc,next){
//         if(cb(next)){
//             acc[0].push(next);
//         } else {
//             acc[1].push(next);
//         }
//         return acc;
//     }, [[],[]]);
// }