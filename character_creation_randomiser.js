// Stores array of UTF-16 code units for 26 capital letters of the alphabet
const utfString = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = utfString.map((x) => String.fromCharCode(x));

// Returns random capital letter
const capitalLetter1 = alphabet[Math.floor(Math.random()*alphabet.length)];
const capitalLetter2 = alphabet[Math.floor(Math.random()*alphabet.length)];

// Returns random age between 18 and 100
const age = Math.floor(Math.random() * 83) + 18;


/* Code checks:
console.log(alphabet);
console.log(utfString);
console.log(capitalLetter1);
console.log(capitalLetter2);
console.log(age);
*/