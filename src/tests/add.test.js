const add = (a,b) => a + b;
test('should add two numbers', () => {
    const result = add(3,4);
    if (result  !== 7)  {
         throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`)
    }
    expect(result).toBe(7);
});
//**************//
const generateGreeting = (name) => `Hello Bonjour ${name} !`
test ('greeting generation check', () =>  {
    const greeting = generateGreeting('Marc');
    expect(greeting).toBe('Hello Bonjour Marc !') 
});