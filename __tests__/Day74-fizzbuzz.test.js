const { fizzbuzz } = require('../Day74-fizzbuzz')

describe('FizzBuuzz', () => {
    test('Unit test for FizzBuuzz', () => {
        expect(fizzbuzz(10)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']);
        expect(fizzbuzz(3)).toEqual([1, 2, 'Fizz']);
        // expect(fizzbuzz(3)).toEqual([1, 2]);
    });
});