/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
 * - if array has elements, then return array as string, joined by '|' (pipe character)
 * - otherwise, return an empty string
 * input: array (collection)
 * output: string
 * validate input: throw TypeError with message "expected array but received <type-of-argument>" if input is not an array
 */
/**
 * @param {Array} collection
 * @returns {string}
 * @throws {TypeError}
 */
export function transformCollectionToString(collection) {
    if (!Array.isArray(collection)) {
        throw new TypeError(`expected array but received ${typeof collection}`);
    }

    if (collection.length === 0) {
        return '';
    }

    return collection.join('|');
}
