/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

          let one=str1.toLowerCase();
          let two=str2.toLowerCase();  

      const sortedStr1 = one.split('').sort().join('');
      const sortedStr2 = two.split('').sort().join('');
  
      // Compare the sorted strings
      return sortedStr1 === sortedStr2;

}

module.exports = isAnagram;
