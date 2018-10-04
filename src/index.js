module.exports = function longestConsecutiveLength(arr) {
 if (arr.length === 0) {
    return 0;
  }
  
  let hash = {};
  let longestSequence = 1;
  let currentSequence = 1;
  
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = true;
  }
  
  for (let key in hash) {
    if (hash[+(key) + 1]) {
      currentSequence++;
    } else {
      currentSequence = 1;
    }
      
    if (currentSequence > longestSequence) {
      longestSequence = currentSequence;
    }
  }
  
  return longestSequence;
}
