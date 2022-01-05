const scores = [
    0,0,0,0,0,0,0,0,55,59,69,73,73,75,79,83,88,91,93
];

// scores.find(function(score){
//     return score>75;
// }); //75

// scores.find(function(score){
//     return score>100;
// }); //undefined

// scores.find(function(score){
//     return score % 2 === 0 && score > 0;
// });  

// const evenScores = scores.filter(function(score) {
//     return score % 2 === 0;
// }); // works like a find all for the even numbers, as opposed to just the first instance

// const firstEven = scores.findIndex(function(score){
//     return score % 2 === 0 && score > 0;
// });  

// scores.findIndex(function(score){
//     return score > 100;
// }) //-1

// function partition(arr, pivot){
//     const pivotIdx = arr.findIndex(function(el){
//         return el > pivot;
//     }); 
//     console.log(pivotIdx);
// };

// partition(scores, 0) 
// 8  
// partition(scores, 75)
// 14

// function partition(arr, pivot){
//     const pivotIdx = arr.findIndex(function(el){
//         return el > pivot;
//     });
//     const left = arr.slice(0, pivotIdx);
//     const right = arr.slice(pivotIdx);
     
//     return [left, right];
// };


// partition(scores, 0) 
// 0: (8) [0, 0, 0, 0, 0, 0, 0, 0]
// 1: (11) [55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93] 
// partition(scores, 75)
// (2) [Array(14), Array(5)]
// 0: (14) [0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 69, 73, 73, 75]
// 1: (5) [79, 83, 88, 91, 93] 
// partition(scores, 74) 
// 0: (13) [0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 69, 73, 73]
// 1: (6) [75, 79, 83, 88, 91, 93]

// function myFind(arr, callback){
//     for(let i =0; i < arr.length; i++){
//       if(callback(arr[i],i,arr) === true) return arr[i];
//     }
// }

// myFind(scores, function(score){
//     return score > 91;
// })

// function myFindIndex(arr, callback) {
//     for (let i = 0; i < arr.length; i++){
//         if (callback(arr[i],i,arr) === true) return i;
//     }
//     return -1;
// }

// myFindIndex(scores, function(score){
//     return score !== 0 && score % 2 == 0;
// });

// exercises:
// 1.
// findUserByUsername
// Write a function called findUserByUsername which accepts an array of objects, 
// each with a key of username, and a string. The function should return the first 
// object with the key of username that matches the string passed to the function. 
// If the object is not found, return undefined.

// const users = [
//   {username: 'mlewis'},
//   {username: 'akagen'},
//   {username: 'msmith'}
// ];

// findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
// findUserByUsername(users, 'taco') // undefined

//  function findUserByUsername(users, username) {
//         return users.find(function(user){
//             return user.username === username;
//     })
// }

// 2. removeUser
// Write a function called removeUser which accepts an array of objects, each with a 
// key of username, and a string. The function should remove the object from the array 
// and return this object. If the object is not found, return undefined.

// const users = [
//   {username: 'mlewis'},
//   {username: 'akagen'},
//   {username: 'msmith'}
// ];

// removeUser(users, 'akagen') // {username: 'akagen'}
// removeUser(users, 'akagen') // undefined

// function removeUser(users, username) {
//     let removeIndex = users.findIndex(function(user){
//       return user.username === username;
//     })
//     if(removeIndex === -1) return;
  
//     return users.splice(removeIndex,1)[0];
//   }