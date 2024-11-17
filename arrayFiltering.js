function filterEvenNumbers(arr) {
    if (!Array.isArray(arr)) throw new Error('Input must be an array');
    return arr.filter(num => num % 2 !== 0);
  }
  
  module.exports = filterEvenNumbers;
  


  
  