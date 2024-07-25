const { fizzbuzz } = require('../Day74-fizzbuzz')
describe('FizzBuuzz', () => {
    test('Unit test for FizzBuuzz', () => {
        const expect = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
        expect(fizzbuzz(10)).toBe(expect);
    });
});