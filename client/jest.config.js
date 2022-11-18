/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  modulePaths: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
};
