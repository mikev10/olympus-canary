import { describe, expect, test } from 'vitest';
import { capitalize } from '../src/index.js';

describe('capitalize', () => {
  test('upper-cases the first character only', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('leaves the empty string empty', () => {
    expect(capitalize('')).toBe('');
  });
});
