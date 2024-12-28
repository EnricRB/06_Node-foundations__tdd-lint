import { describe, test, expect } from 'vitest';
import { generateRandomNumberInRange } from '../exercise_03/generateRandomNumberInRange';

describe('Given a limit', () => {
    test('When the limit is a number, it should return a number between 0 and limit (rounded)', () => {
        // Arrange
        const limit = 10;

        // Act
        const result = generateRandomNumberInRange(limit);

        // Assert
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(limit);
    });

    test('When the limit is 0, it should return 0', () => {
        // Arrange
        const limit = 0;

        // Act
        const result = generateRandomNumberInRange(limit);

        // Assert
        expect(result).toBe(0);
    });

    test('When the limit is a non-number, it should throw a TypeError', () => {
        // Arrange
        const invalidLimit = 'string';

        // Act & Assert
        expect(() => generateRandomNumberInRange(invalidLimit)).toThrowError(
        new TypeError('expected number but received string')
        );
    });

    test('When the limit is a negative number, it should throw a TypeError', () => {
        // Arrange
        const invalidLimit = -10;
      
        // Act & Assert
        expect(() => generateRandomNumberInRange(invalidLimit)).toThrowError(
          new TypeError('expected positive number but received -10')
        );
      });
      
});
