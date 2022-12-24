module.exports = {
  preset: "ts-jest",
  verbose: true,
  collectCoverage: true,
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  transformIgnorePatterns: ["/node_modules"],
  moduleDirectories: ["node_modules", "src"],
  globals: {
    __PATH_PREFIX__: "",
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
  },
  setupFiles: ["<rootDir>/loadershim.js"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.ts"],
  testResultsProcessor: "jest-sonar-reporter",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    '\\.(png|svg|pdf|jpg|jpeg)$': '<rootDir>/src/__mocks__/file-mock.ts',
    "^@/(.*)": "<rootDir>/src/$1",
  },
};
