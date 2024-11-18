const getUserById = require('./apiSimulation')

// describe('getUserById',()=>{

// test('user name by id',()=>{

// expect(getUserById(1)).toBe({ id: 1, name: 'John Doe' })
// })

// })



describe('getUserById', () => {
  
    // Test case for a valid user ID
    test('returns a user object when a valid ID is provided', async () => {
      const user = await getUserById(1); // Pass a valid ID, such as 1
      
      // Assert that the returned user matches the expected result
      expect(user).toEqual({ id: 1, name: 'John Doe' });
    });
  
    // Test case for an invalid user ID
    test('throws an error when an invalid ID is provided', async () => {
      // Using expect().rejects to check for rejection
      await expect(getUserById(999)).rejects.toThrow('User not found');
    });
    
  });