const reverseString = require('./reverseString')

describe('reverseString',()=>{
    

    test('reverse normal string', () => {
      expect(reverseString('Abimbola')).toBe('alobmibA');
    });

    test('reverses a string with special characters', () => {
        expect(reverseString('!@#')).toBe('#@!');
      });

    test('reverses an empty string', () => {
        expect(reverseString('')).toBe('');
      });


    test('throws an error when input is not a string', () => {
        expect(() => reverseString(123)).toThrow('Input must be a string');
      });

      test('reverses a string with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
      });
    
   


})