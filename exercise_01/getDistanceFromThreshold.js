/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */

/**
 * 
 * @param {number} value
 * @param {number} threshold
 * @returns {number}
 * @throws {TypeError}
 */
export function getDistanceFromThreshold(value, threshold) {
    if (typeof value !== 'number') {
      throw new TypeError(`expected number but received ${typeof value}`);
    }
    if (typeof threshold !== 'number') {
      throw new TypeError(`expected number but received ${typeof threshold}`);
    }
  
    return Math.abs(value - threshold);
  }
  
  