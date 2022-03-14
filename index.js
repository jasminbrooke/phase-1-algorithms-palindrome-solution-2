function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}


//iterate from the beginning of the string to the middle of the string
//   compare the letter we're iterating over to the corresponding letter at the end of the string
//     if the letters don't match, return false

// if we reach the middle, and all the letters match, return true

// The function "isPalindrome()" takes in a word. It divides the word length in half to determine the position of the middle of the word. 
// It checks the first letter and the last letter of each word to see if they are the same. It then iterates through the word by its index numbers,
// by moving toward the middle letter(s) from each index position on either end. If each letter corresponds to the same letter on each side, it returns true. 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
