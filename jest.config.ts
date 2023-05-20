import type { Config } from "jest";

const config: Config = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/**.d.ts",
    "!src/**/*.mock.spec.(t|j)s",
    "!**/*index.ts",
    "!src/helpers/**.*",
  ],
  testEnvironment: "jsdom",
  testRegex: [
    "^(?!.*\.(mock.spec)\.ts$).*\.spec.(ts|tsx)$"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

export default config;
