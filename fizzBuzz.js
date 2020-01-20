'use strict';

/**
 * FizzBuzz module.
 * @module fizzBuzz
 */

/**
 * Get the result.
 * If number is multiple of 3 result is "Fizz".</br>
 * If number is multiple of 5 result is "Buzz"
 * If number is multiple of 3 and 5 result is "FizzBuzz"
 * If the given number is not a multiple of 3 or 5 result is the number to string format
 * @param {number} number - The number (between 1 and 100)
 * @return {string} The result
 */
const getResult = number => {
  if (number <= 0) throw new Error('Number must be positive');
  if (number > 100) throw new Error('Number must lower than 100');
  const results = [];

  if (number % 3 === 0) results.push('Fizz'+'\n');
  if (number % 5 === 0) results.push('Buzz'+'\n');
  if (number % 3 === 0 && number % 5 === 0) results.push('FizzBuzz'+'\n');
  if (!results.length) results.push(number+'\n');
  return results.join('');
};

/**
 * Get the results based on the count parameter
 * @see getResult
 * @param {number} count - Print the number upto
 * @return {string} The results
 */
const getResults = (count) => {
  const output = [];
  for (var i = 1; i <= count; i++) {
    output.push(getResult(i));
  }
  return output.join('');
};

module.exports = {
  getResult: getResult,
  getResults: getResults
};
