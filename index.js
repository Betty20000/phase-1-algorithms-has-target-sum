function hasTargetSum(array, target) {
  // Write your algorithm here
   // Create an empty set to store encountered numbers.
    const seen = new Set();

    // Iterate through each number in the array.
    for (let num of array) {
        // For each number, check if the difference between the target and the current number is in the set.
        const complement = target - num;
        // If it is, return true.
        if (seen.has(complement)) {
            return true;
        }
        // If not, add the current number to the set.
        seen.add(num);
    }
    // If the loop completes without finding a pair, return false.
    return false;
}

/* 
  Write the Big O time complexity of your function here
  Test Case 1:
Input: hasTargetSum([3, 8, 12, 4, 11, 7], 10)
Expected Output: true
Test Case 2:
Input: hasTargetSum([22, 19, 4, 6, 30], 25)
Expected Output: true
Test Case 3:
Input: hasTargetSum([1, 2, 5], 4)
Expected Output: false
*/

/* 
  Add your pseudocode here
  Create an empty set to store encountered numbers.
Iterate through each number in the array.
For each number, check if the difference between the target and the current number is in the set.
If it is, return true.
If not, add the current number to the set.
If the loop completes without finding a pair, return false
*/

/*
  Add written explanation of your solution here
  The function should determine whether there exists a pair of numbers 
  within the array that adds up to the target integer.
   It should return true if such a pair exists, otherwise false
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
