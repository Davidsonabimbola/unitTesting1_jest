const filterEvenNumbers = require('./arrayFiltering')

describe('filtering even numbers',()=>{


test('input array of numbers',()=>{
    expect(filterEvenNumbers([1,2,3,4,5])).toEqual([1,3,5])
    
})


test('input array of only even numbers',()=>{
    expect(filterEvenNumbers([2,4,16,24,46])).toEqual([])
    
})


test('returns empty array when input is empty',()=>{
    expect(filterEvenNumbers([])).toEqual([])
    
})


test('throws an error if input is not an array', () => {
    expect(() => filterEvenNumbers('not an array')).toThrow('Input must be an array');
  });

  test('input is not an array (number)', () => {
    expect(() => filterEvenNumbers(123)).toThrow('Input must be an array');
  });
  
  test('input is not an array (null)', () => {
    expect(() => filterEvenNumbers(null)).toThrow('Input must be an array');
  });
  
  test('input is not an array (undefined)', () => {
    expect(() => filterEvenNumbers(undefined)).toThrow('Input must be an array');
  });
  


})