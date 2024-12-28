/**
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
 * - if sum result exceeds 100, then return message "Sum with value <random> exceeds in <sum> from number 100"
 * - otherwise, return message "Sum with value <random> is left in <result> from number 100"
 * input: number (value)
 * output: string
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */
/**
 * @param {number} value
 * @returns {string}
 * @throws {TypeError}
 */
export function getDistanceMessageFromSumTo100(value) {
    if (typeof value !== 'number') {
        throw new TypeError(`expected number but received ${typeof value}`);
    }

    const randomNumber = Math.floor(Math.random() * 101);
    const sum = value + randomNumber;

    if (sum > 100) {
        return `Sum with value ${randomNumber} exceeds in ${sum - 100} from number 100`;
    } else {
        return `Sum with value ${randomNumber} is left in ${100 - sum} from number 100`;
    }
}
