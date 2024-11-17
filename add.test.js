const add = require('./add');

describe('add',()=>{

    test('adds two positive numbers', () => {
      expect(add(1, 2)).toBe(3);
    });
    
    test('adds a positive and a negative number', () => {
      expect(add(5, -3)).toBe(2);   
      
    });

    test('adds two negative numbers', () => {
        expect(add(-8, -3)).toBe(-11);   
        
      });


})



