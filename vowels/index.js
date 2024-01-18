// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowelRegex = /[aeiou]/gi; // Regex dopasowujący samogłoski (globalny, zignorowanie wielkości liter)
  
    const matches = str.match(vowelRegex); // Znajdź wszystkie dopasowane samogłoski
  
    return matches ? matches.length : 0; // Zwróć liczbę samogłoskowych liter lub 0, jeśli nie znaleziono
  }

module.exports = vowels;
