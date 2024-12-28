import { describe, test, expect } from 'vitest';
import { isAdditionGreaterThanFifty } from '../exercise_05/isAdditionGreaterThanFifty';

describe('Given a pair of numbers', () => {

    test('When the sum of the numbers is greater than or equal to 50, it should return true', () => {
        // Arrange
        const summand1 = 30;
        const summand2 = 20;

        // Act
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert
        expect(result).toBe(true);
    });

    test('When the sum of the numbers is less than 50, it should return false', () => {
        // Arrange
        const summand1 = 20;
        const summand2 = 15;

        // Act
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert
        expect(result).toBe(false);
    });

    test('When one of the numbers is not a number, it should throw a TypeError', () => {
        // Arrange
        const invalidSummand1 = 'string';
        const summand2 = 20;

        // Act & Assert
        expect(() => isAdditionGreaterThanFifty(invalidSummand1, summand2)).toThrowError(
            new TypeError('expected number but received string')
        );
    });

    test('When the other number is not a number, it should throw a TypeError', () => {
        // Arrange
        const summand1 = 25;
        const invalidSummand2 = {};

        // Act & Assert
        expect(() => isAdditionGreaterThanFifty(summand1, invalidSummand2)).toThrowError(
            new TypeError('expected number but received object')
        );
    });
});
