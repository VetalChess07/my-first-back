import tseslint from 'typescript-eslint';


export default tseslint.config({
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // Ваши кастомные правила
  },
});
