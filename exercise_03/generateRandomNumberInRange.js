/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */
/**
 * 
 * @param {number} limit
 * @returns {number}
 * @throws {TypeError}
 */
export function generateRandomNumberInRange(limit) {
    if (typeof limit !== 'number') {
      throw new TypeError(`expected number but received ${typeof limit}`);
    }
  
    if (limit < 0) {
      throw new TypeError(`expected positive number but received ${limit}`);
    }
  
    const randomNumber = Math.random() * limit;
  
    return Math.round(randomNumber);
  }
  
  
