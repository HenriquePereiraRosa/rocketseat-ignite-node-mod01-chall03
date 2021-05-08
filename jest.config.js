// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/src'],
  // coverageProvider: "v8",
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx, ts, tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testMatch: [
    "<rootDir>/src/__tests__/**/*.spec.js",
  ],
  // setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  // testTimeout: 500
}
