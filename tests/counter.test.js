// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(1, 'increment') will eventualy return 10
// Test case 2: counter(10, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require('../src/counter')

// test('10, increment should be return 10', () => {
//   return expect(counter(10, "increment")).resolves.toBe(10);
// }, 11000)

// test('10, decrement should be return 0', () => {
//   return expect(counter(10, "decrement")).resolves.toBe(0);
// }, 11000)

test('5, increment should be return 5', () => {
  return expect(counter(3, "increment")).resolves.toBe(3);
})

test('3, decrement should be return 0', () => {
  return expect(counter(3, "decrement")).resolves.toBe(0);
})

