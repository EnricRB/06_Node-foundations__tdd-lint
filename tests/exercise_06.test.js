import { describe, test, expect } from 'vitest';
import { checkCollectionHasElements } from '../exercise_06/checkCollectionHasElements';

describe('Given a collection', () => {

    test('When the collection has elements, it should return true', () => {
        // Arrange
        const collection = [1, 2, 3];

        // Act
        const result = checkCollectionHasElements(collection);

        // Assert
        expect(result).toBe(true);
    });

    test('When the collection is empty, it should return false', () => {
        // Arrange
        const collection = [];

        // Act
        const result = checkCollectionHasElements(collection);

        // Assert
        expect(result).toBe(false);
    });

    test('When the input is not an array, it should throw a TypeError', () => {
        // Arrange
        const invalidCollection = 'not an array';

        // Act & Assert
        expect(() => checkCollectionHasElements(invalidCollection)).toThrowError(
            new TypeError('expected array but received string')
        );
    });
});
