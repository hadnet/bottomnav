module.exports = {
  extends: [
    'react-app', // Create React App base settings
    'eslint:recommended', // recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // recommended rules from @typescript-eslint/eslint-plugin
    'prettier',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
