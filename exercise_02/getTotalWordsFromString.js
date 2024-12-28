/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */
/**
 * 
 * @param {string} sentence
 * @returns {number}
 * @throws {TypeError}
 */
export function getTotalWordsFromString(sentence) {
    if (typeof sentence !== 'string') {
      throw new TypeError(`expected string but received ${typeof sentence}`);
    }
  
    const words = sentence.trim().split(/\s+/).filter(word => word.length > 0);
  
    return words.length;
  }
  