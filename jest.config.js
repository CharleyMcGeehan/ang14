module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleDirectories: ['node_modules', __dirname, 'cypress'],
  globalSetup: 'jest-preset-angular/global-setup',
};
