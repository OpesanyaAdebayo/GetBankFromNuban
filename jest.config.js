module.exports = {
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.json',
      },
    },
    moduleFileExtensions: [
      'js',
      'ts',
    ],
    testMatch: [
      '**/src/**/*.test.(ts|js)',
    ],
    testEnvironment: 'node',
    preset: 'ts-jest',
  };