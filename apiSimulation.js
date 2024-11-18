const mockDatabase = {
    1: { id: 1, name: 'John Doe' },
    2: { id: 2, name: 'Jane Smith' },
  };
  
  function getUserById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockDatabase[id];
        if (user) resolve(user);
        else reject(new Error('User not found'));
      }, 500);
    });
  }
  
  module.exports = getUserById;
  