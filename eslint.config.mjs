import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { configs as astroConfigs } from 'eslint-plugin-astro'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import n from 'eslint-plugin-n'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import promise from 'eslint-plugin-promise'
import globals from 'globals'

const tsFiles = ['**/*.{ts,tsx}']
const tsconfigRootDir = dirname(fileURLToPath(import.meta.url))
const tryExtensions = ['.js', '.mjs', '.cjs', '.ts', '.tsx', '.astro']
const typedTsConfigs = tsPlugin.configs['flat/recommended-type-checked'].map(
  config => ({
    ...config,
    files: config.files ?? tsFiles
  })
)

export default [
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**']
  },
  js.configs.recommended,
  n.configs['flat/recommended-module'],
  promise.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,ts,tsx,astro}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      sourceType: 'module'
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      'import/no-unresolved': 'off',
      'n/no-missing-import': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      'no-console': 'off'
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: tryExtensions
        }
      },
      node: {
        tryExtensions
      }
    }
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs'
    }
  },
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'jsx-a11y': jsxA11y
    },
    rules: jsxA11y.configs.recommended.rules
  },
  ...typedTsConfigs,
  {
    files: tsFiles,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir
      }
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off'
    }
  },
  {
    files: ['src/env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  },
  ...astroConfigs['flat/recommended'],
  prettierRecommended
]
