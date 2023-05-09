// Episode 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };

// const declareMurderer = function() {
// return `The murderer is ${scenario.murderer}.`;
// }
  
// const verdict = declareMurderer();
// console.log(verdict);

  // Answer

  // The output will be 'The murderer is Miss Scarlet'. This is because the result of declareMurderer will return the murderer from the scenario who is Miss Scarlet.


  // Episode 2

//   const murderer = 'Professor Plum';

//   const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
//   }
  
//   const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);

  // Answer

  //  This will result in an error because the murderer is set to const and can't be changed by the changeMurderer function.


  // Episode 3

//   let murderer = 'Professor Plum';

//   const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
//   }
  
//   const firstVerdict = declareMurderer();
//   console.log('First Verdict: ', firstVerdict);
  
//   const secondVerdict = `The murderer is ${murderer}.`;
//   console.log('Second Verdict: ', secondVerdict);


  // Answer

  // The first verdict will be Mrs Peacock. This is because in the block that contains the declareMurderer function, Mrs Peacock is assigned to murderer. The second verdict will be Professor Plum because the murderer used for the secondVerdict uses Professor Plum as it is a global variable.


  // Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Answer

// The suspects would be Miss Scarlet, Professor Plum and Colonel Mustard. This is because in the declareAllSuspects function, suspectThree is replaced by Colonel Mustard because it was assigned using a let, but suspectOne and suspectTwo remain the same. The last suspectThree is Mrs Peacock because this call is outwith the scope of the declareAllSuspects function.


// Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);


  // Answer

  //The result here is 'The weapon is the revolver'. This is because the weapon starts as a candle stick, even though it is assigned as a const it can still be changed. the changeWeapon changes it to a revolver and the declareWeapon declares it as a Revolver.


  // Episode 6

//   let murderer = 'Colonel Mustard';

//   const changeMurderer = function() {
//     murderer = 'Mr. Green';
  
//     const plotTwist = function() {
//         murderer = 'Mrs. White';
//     }
  
//     plotTwist();
//   }
  
//   const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);

// Answer

// The result here is 'The murderer is Mrs White'. This is because the murderer starts as Colonel Mustard, then after going through the plotTwist function in the changeMurderer function, the murderer changes to Mrs White.


// Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Answer

// The result of this would be 'The murderer is Mr. Green. This is because even though the original murderer was Professor Plum, the murderer in scope when the function is called is Mr Green. The murderers in plotTwist block would have been colonel Mustard and Miss Scarlet in unexpectedOutcome.


// Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// // Answer

// The result of this would be 'The weapon is the candlestick'. This is because the weapon starts as the lead pipe, then the room changes to Dining room, then the murderer changes to colonel mustard. When colonel mustard is the murderer, this changes the murder weapon to the candlestick.


// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Answer

// The answer is 'The murderer is Professor Plum'. This is because Mrs. Peacock is called using let and is only accessible in the scope of the if block.