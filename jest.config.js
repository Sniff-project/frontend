module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "scss"],
  testMatch: ["<rootDir>/**/*.(spec|test).(js|jsx)"],
  transform: {
    "^.+\\.(js|jsx)$": [
      "babel-jest",
      {
        presets: [
          "@babel/preset-env",
          ["@babel/preset-react", { runtime: "automatic" }],
        ],
      },
    ],
    "^.+\\.scss$": "jest-transform-stub",
  },
  moduleNameMapper: {
    axios: "axios/dist/node/axios.cjs",
    "^@assets/(.*)$": "<rootDir>/src/Assets/$1",
    "^@components/(.*)$": "<rootDir>/src/Components/$1",
    "^@containers/(.*)$": "<rootDir>/src/Containers/$1",
    "^@contexts/(.*)$": "<rootDir>/src/Contexts/$1",
    "^@core/(.*)$": "<rootDir>/src/Core/$1",
    "^@pages/(.*)$": "<rootDir>/src/Pages/$1",
    "^@routes/(.*)$": "<rootDir>/src/Routes/$1",
    "^@styles/(.*)$": "<rootDir>/src/Styles/$1",
  },
  modulePathIgnorePatterns: ["<rootDir>/build/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results",
        outputName: "junit.xml",
      },
    ],
  ],
};
