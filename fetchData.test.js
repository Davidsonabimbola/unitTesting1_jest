const fetchData = require('./fetchData')



describe('fetchDta',()=>{

    test('should fetch data correctly',async ()=>{

        const url = await fetchData('https://example.com/user')
        expect(url).toEqual({ id: 1, name: 'John Doe' })
    
    })




    test('throws an error when an invalid URL is provided', async () => {
        // For asynchronous functions that throw, use .rejects.toThrow
        await expect(fetchData('https://noexample.com/user')).rejects.toThrow('Not Found');
      });


      test('throws an error when the URL is not provided', async () => {
        // Assert that the function throws an error when URL is missing
        await expect(fetchData()).rejects.toThrow('URL is required');
      });
})
