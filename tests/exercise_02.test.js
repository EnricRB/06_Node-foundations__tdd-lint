import { describe, test, expect } from 'vitest';
import { getTotalWordsFromString } from '../exercise_02/getTotalWordsFromString';

describe('Given a string', () => {
  test('When the string has multiple words, it should return the correct word count', () => {
    // Arrange
    const sentence = 'Hello there, how are you?';

    // Act
    const result = getTotalWordsFromString(sentence);

    // Assert
    expect(result).toBe(5);
  });

  test('When the string has a single word, it should return 1', () => {
    // Arrange
    const sentence = 'Hello';

    // Act
    const result = getTotalWordsFromString(sentence);

    // Assert
    expect(result).toBe(1);
  });

  test('When the string is empty, it should return 0', () => {
    // Arrange
    const sentence = '';

    // Act
    const result = getTotalWordsFromString(sentence);

    // Assert
    expect(result).toBe(0);
  });

  test('When the string contains multiple spaces, it should count the correct number of words', () => {
    // Arrange
    const sentence = '   Hello     there,    how     are    you?   ';

    // Act
    const result = getTotalWordsFromString(sentence);

    // Assert
    expect(result).toBe(5);
  });

  test('When the input is not a string, it should throw a TypeError', () => {
    // Arrange
    const invalidInput = 12345;

    // Act & Assert
    expect(() => getTotalWordsFromString(invalidInput)).toThrowError(
      new TypeError('expected string but received number')
    );
  });
});
