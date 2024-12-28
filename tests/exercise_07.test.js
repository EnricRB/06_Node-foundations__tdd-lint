import { describe, test, expect } from 'vitest';
import { isTypeOf } from '../exercise_07/isTypeOf';

describe('Given a value and a type', () => {

    test('When the value is a string and the type is "string", it should return true', () => {
        // Arrange
        const value = 'hello';
        const type = 'string';

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });

    test('When the value is a number and the type is "number", it should return true', () => {
        // Arrange
        const value = 42;
        const type = 'number';

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });

    test('When the value is a boolean and the type is "boolean", it should return true', () => {
        // Arrange
        const value = true;
        const type = 'boolean';

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });

    test('When the value is an array and the type is "array", it should return true', () => {
        // Arrange
        const value = [1, 2, 3];
        const type = 'array';

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });

    test('When the type is not valid, it should throw a TypeError', () => {
        // Arrange
        const value = 'hello';
        const invalidType = 'object';

        // Act & Assert
        expect(() => isTypeOf(value, invalidType)).toThrowError(
            new TypeError("expected one of 'string', 'number', 'boolean', 'array' but received string")
        );
    });

    test('When the value type does not match the expected type, it should return false', () => {
        // Arrange
        const value = 'hello';
        const type = 'number';

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(false);
    });
});
