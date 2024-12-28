import { describe, test, expect } from 'vitest';
import { formatStringByWordsLength } from '../exercise_08/formatStringByWordsLength';

describe('Given a sentence', () => {

    test('When the number of words is greater than 5, it should return the string in uppercase', () => {
        // Arrange
        const sentence = 'This is a test sentence with more than five words';
        
        // Act
        const result = formatStringByWordsLength(sentence);

        // Assert
        expect(result).toBe(sentence.toUpperCase());
    });

    test('When the number of words is 5 or fewer, it should return the string in lowercase', () => {
        // Arrange
        const sentence = 'This is a test sentence';

        // Act
        const result = formatStringByWordsLength(sentence);

        // Assert
        expect(result).toBe(sentence.toLowerCase());
    });

    test('When the input is not a string, it should throw a TypeError', () => {
        // Arrange
        const invalidSentence = 12345;
        
        // Act & Assert
        expect(() => formatStringByWordsLength(invalidSentence)).toThrowError(
            new TypeError('expected string but received number')
        );
    });
});
