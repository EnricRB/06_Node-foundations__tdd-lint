import { describe, test, expect } from 'vitest';
import { isGreaterThan } from '../exercise_04/isGreaterThan';

describe('Given a value and a threshold', () => {

    test('When the value is greater than the threshold, it should return true', () => {
        // Arrange
        const value = 15;
        const threshold = 10;

        // Act
        const result = isGreaterThan(value, threshold);

        // Assert
        expect(result).toBe(true);
    });

    test('When the value is less than the threshold, it should return false', () => {
        // Arrange
        const value = 5;
        const threshold = 10;

        // Act
        const result = isGreaterThan(value, threshold);

        // Assert
        expect(result).toBe(false);
    });

    test('When the value is equal to the threshold, it should return false', () => {
        // Arrange
        const value = 10;
        const threshold = 10;

        // Act
        const result = isGreaterThan(value, threshold);

        // Assert
        expect(result).toBe(false);
    });

    test('When the value is not a number, it should throw a TypeError', () => {
        // Arrange
        const invalidValue = 'string';
        const threshold = 10;

        // Act & Assert
        expect(() => isGreaterThan(invalidValue, threshold)).toThrowError(
            new TypeError('expected number but received string')
        );
    });

    test('When the threshold is not a number, it should throw a TypeError', () => {
        // Arrange
        const value = 10;
        const invalidThreshold = {};

        // Act & Assert
        expect(() => isGreaterThan(value, invalidThreshold)).toThrowError(
            new TypeError('expected number but received object')
        );
    });
});
