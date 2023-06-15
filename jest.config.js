/** @type {import('jest').Config} */

const jestConfig = {
  rootDir: '.',
  transformIgnorePatterns: [],
  testMatch: ['<rootDir>/tests/*.test.ts'],
  transform: {
    '^.+\\.(t|j)s?$': '@swc/jest'
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
}

export default jestConfig
