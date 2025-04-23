// eslint.config.mjs
import js from '@eslint/js'
import next from 'eslint-config-next'
import typescript from '@typescript-eslint/eslint-plugin'

export default [
  js.configs.recommended,
  ...next(),
  {
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'prefer-const': 'off'
    },
    ignores: ['src/antlr/**']
  }
]
