/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument
 * input: any (value)
 * input: 'string' | 'number' | 'boolean' | 'array' (type)
 * output: boolean
 * validate input: throw TypeError with message "expected one of 'string', 'number', 'boolean', 'array' but received <type-of-argument>" if type is not valid
 */
/**
 * @param {any} value
 * @param {'string' | 'number' | 'boolean' | 'array'} type
 * @returns {boolean}
 * @throws {TypeError}
 */
export function isTypeOf(value, type) {
    const validTypes = ['string', 'number', 'boolean', 'array'];
    
    if (!validTypes.includes(type)) {
        throw new TypeError(`expected one of 'string', 'number', 'boolean', 'array' but received ${typeof type}`);
    }
    
    if (type === 'array') {
        return Array.isArray(value);
    }

    return typeof value === type;
}
