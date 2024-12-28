import { describe, test, expect } from 'vitest';
import { transformCollectionToString } from '../exercise_10/transformCollectionToString';

describe('Given a collection', () => {

    test('When the collection has elements, it should return a string joined by "|" (pipe)', () => {
        // Arrange
        const collection = ['apple', 'banana', 'cherry'];

        // Act
        const result = transformCollectionToString(collection);

        // Assert
        expect(result).toBe('apple|banana|cherry');
    });

    test('When the collection is empty, it should return an empty string', () => {
        // Arrange
        const collection = [];

        // Act
        const result = transformCollectionToString(collection);

        // Assert
        expect(result).toBe('');
    });

    test('When the collection is not an array, it should throw a TypeError', () => {
        // Arrange
        const invalidCollection = 'string';

        // Act & Assert
        expect(() => transformCollectionToString(invalidCollection)).toThrowError(
            new TypeError('expected array but received string')
        );
    });
});
