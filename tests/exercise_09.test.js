import { describe, test, expect } from 'vitest';
import { getDistanceMessageFromSumTo100 } from '../exercise_09/getDistanceMessageFromSumTo100';

describe('Given a number', () => {

    test('When the sum exceeds 100, it should return the correct message with the distance exceeded', () => {
        // Arrange
        const value = 99;

        // Act
        const result = getDistanceMessageFromSumTo100(value);

        // Assert
        expect(result).toMatch(/^Sum with value \d{1,3} exceeds in \d+ from number 100$/);
    });

    test('When the sum does not exceed 100, it should return the correct message with the remaining distance', () => {
        // Arrange
        const value = 10;

        // Act
        const result = getDistanceMessageFromSumTo100(value);

        // Assert
        expect(result).toMatch(/^Sum with value \d{1,3} is left in \d+ from number 100$/);
    });

    test('When the input is not a number, it should throw a TypeError', () => {
        // Arrange
        const invalidValue = 'string';
        
        // Act & Assert
        expect(() => getDistanceMessageFromSumTo100(invalidValue)).toThrowError(
            new TypeError('expected number but received string')
        );
    });
});
