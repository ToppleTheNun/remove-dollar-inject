import eol from 'eol';

import {
  examplePreJsEs5String,
  examplePostJsEs5String,
  exampleIifePreJsEs5String,
  exampleIifePostJsEs5String,
  examplePreJsEs6String,
  examplePostJsEs6String,
  exampleIifePreJsEs6String,
  exampleIifePostJsEs6String
} from '../test/examples';
import removeDollarInject from '.';

describe('removeDollarInject', () => {
  describe('with null source', () => {
    it('returns empty string', () => {
      const output = removeDollarInject(null);
      expect(output).toBeDefined();
      expect(output).toBe('');
    });
  });

  describe('with undefined source', () => {
    it('returns empty string', () => {
      const output = removeDollarInject(undefined);
      expect(output).toBeDefined();
      expect(output).toBe('');
    });
  });

  describe('with ES5 source', () => {
    it('returns source without $inject', () => {
      const output = removeDollarInject(examplePreJsEs5String);
      expect(output).toBeDefined();
      // Use eol in order to eliminate issues caused by line endings.
      expect(eol.auto(output)).toBe(examplePostJsEs5String);
    });
  });

  describe('with ES5 (IIFE) source', () => {
    it('returns source without $inject', () => {
      const output = removeDollarInject(exampleIifePreJsEs5String);
      expect(output).toBeDefined();
      // Use eol in order to eliminate issues caused by line endings.
      expect(eol.auto(output)).toBe(exampleIifePostJsEs5String);
    });
  });

  describe('with ES6 source', () => {
    it('returns source without $inject', () => {
      const output = removeDollarInject(examplePreJsEs6String);
      expect(output).toBeDefined();
      // Use eol in order to eliminate issues caused by line endings.
      expect(eol.auto(output)).toBe(examplePostJsEs6String);
    });
  });

  describe('with ES6 (IIFE) source', () => {
    it('returns source without $inject', () => {
      const output = removeDollarInject(exampleIifePreJsEs6String);
      expect(output).toBeDefined();
      // Use eol in order to eliminate issues caused by line endings.
      expect(eol.auto(output)).toBe(exampleIifePostJsEs6String);
    });
  });
});
