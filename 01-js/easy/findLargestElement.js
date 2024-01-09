/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
           let ans=numbers[0];

       numbers.forEach(element => {
          if(element>ans) ans=element;
       });

        return ans;
}

module.exports = findLargestElement;