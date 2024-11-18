async function fetchData(url) {
    if (!url) throw new Error('URL is required');
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/user') {
          resolve({ id: 1, name: 'John Doe' });
        } else {
          reject(new Error('Not Found'));
        }
      }, 500);
    });
  }
  
  module.exports = fetchData;
  