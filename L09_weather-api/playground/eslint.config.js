import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
    js.configs.recommended,
    {
        plugins: {
            '@stylistic': stylistic
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                alert: 'readonly',
                fetch: 'readonly'
            }
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/semi': ['error', 'always'],
            'no-unused-vars': 'warn',
            'no-console': 'off'
        }
    }
];