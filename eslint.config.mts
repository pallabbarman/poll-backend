import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
    globalIgnores(['**/package-lock.json', '**/dist', '**/node_modules']),
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: { globals: globals.browser },
        rules: {
            'no-console': 'error',
        },
    },
    tseslint.configs.recommended,
    eslintConfigPrettier,
]);
