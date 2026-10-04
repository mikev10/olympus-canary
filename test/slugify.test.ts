import { describe, expect, test } from 'vitest';
import { slugify } from '../src/index.js';

describe('slugify', () => {
  test('lower-cases and joins words with one hyphen', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('collapses every run of other characters into one hyphen', () => {
    expect(slugify('a  --  b__c!!d')).toBe('a-b-c-d');
  });

  test('removes diacritics', () => {
    expect(slugify('Crème Brûlée à la niño')).toBe('creme-brulee-a-la-nino');
  });

  test('trims hyphens from both ends', () => {
    expect(slugify('  ...Leading and trailing!!  ')).toBe('leading-and-trailing');
  });

  test('keeps digits', () => {
    expect(slugify('Version 2.0 is out')).toBe('version-2-0-is-out');
  });

  test('gives the empty string for text with no letter or digit', () => {
    expect(slugify('')).toBe('');
    expect(slugify(' -- !! ')).toBe('');
  });
});
