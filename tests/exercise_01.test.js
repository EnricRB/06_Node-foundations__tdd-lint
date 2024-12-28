import { describe, test, expect } from 'vitest';
import { getDistanceFromThreshold } from '../exercise_01/getDistanceFromThreshold';

describe('Given a number and a threshold', () => {

  test('When the number is greater than the threshold, then it should return the correct positive distance', () => {
    // Arrange
    const num = 15;
    const threshold = 10;

    // Act
    const result = getDistanceFromThreshold(num, threshold);

    // Assert
    expect(result).toBe(5);
  });

  test('When the number is less than the threshold, then it should return the correct positive distance', () => {
    // Arrange
    const num = 5;
    const threshold = 10;

    // Act
    const result = getDistanceFromThreshold(num, threshold);

    // Assert
    expect(result).toBe(5);
  });

  test('When the number is equal to the threshold, then it should return 0', () => {
    // Arrange
    const num = 10;
    const threshold = 10;

    // Act
    const result = getDistanceFromThreshold(num, threshold);

    // Assert
    expect(result).toBe(0);
  });

  test('When the number is not a number, it should throw a TypeError', () => {
    // Arrange
    const invalidNum = 'string';
    const threshold = 10;

    // Act & Assert
    expect(() => getDistanceFromThreshold(invalidNum, threshold)).toThrowError(
      new TypeError('expected number but received string')
    );
  });

  test('When the threshold is not a number, it should throw a TypeError', () => {
    // Arrange
    const num = 10;
    const invalidThreshold = {};

    // Act & Assert
    expect(() => getDistanceFromThreshold(num, invalidThreshold)).toThrowError(
      new TypeError('expected number but received object')
    );
  });
});
