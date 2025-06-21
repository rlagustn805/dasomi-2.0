import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Airbnb JavaScript 스타일 가이드 기반 규칙들

      // 변수 및 함수 선언
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'off',

      // 함수
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'prefer-arrow-callback': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
      'arrow-parens': ['error', 'as-needed'],
      'no-confusing-arrow': 'off',

      // 객체 및 배열
      'object-shorthand': ['error', 'always'],
      'quote-props': ['error', 'as-needed'],
      'no-new-object': 'error',
      'prefer-object-spread': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      // 문자열
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      'prefer-template': 'error',
      'template-curly-spacing': ['error', 'never'],

      // 클래스
      'no-useless-constructor': 'error',
      'no-dupe-class-members': 'error',
      'class-methods-use-this': 'error',

      // 모듈
      'import/prefer-default-export': 'off', // Next.js에서는 named export가 일반적
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',

      // 일반적인 베스트 프랙티스
      eqeqeq: ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-param-reassign': ['error', { props: false }],
      'no-return-assign': ['error', 'always'],
      'no-sequences': 'error',
      'no-unused-expressions': 'error',
      'no-useless-concat': 'error',
      'no-void': 'error',
      radix: 'error',
      'wrap-iife': ['error', 'outside'],
      yoda: 'error',

      // 호이스팅
      'no-undef': 'error',
      'no-global-assign': 'error',

      // 비교 연산자
      'no-case-declarations': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',

      // 블록
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      curly: ['error', 'multi-line'],
      'no-else-return': ['error', { allowElseIf: false }],

      // 공백 및 들여쓰기 (Prettier와 충돌하지 않는 것들)
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],

      // 세미콜론
      semi: ['error', 'always'],
      'no-extra-semi': 'error',

      // TypeScript 관련 (Next.js TypeScript 프로젝트용)
      '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // React 관련 (Next.js용)
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'] },
      ],
      'react/prop-types': 'off', // TypeScript 사용시 불필요
      'react/react-in-jsx-scope': 'off', // Next.js에서는 자동으로 import
      'react/function-component-definition': [
        'off',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',

      // Next.js 관련
      '@next/next/no-html-link-for-pages': 'error',

      // Prettier와 충돌하지 않도록 비활성화할 규칙들
      indent: 'off',
      'linebreak-style': 'off',
      'max-len': 'off',
      'comma-dangle': 'off',
      'object-curly-newline': 'off',
      'operator-linebreak': 'off',
      'implicit-arrow-linebreak': 'off',
      'function-paren-newline': 'off',
    },
  },
  {
    // Prettier 충돌 방지를 위한 설정
    rules: {
      // 이미 Prettier가 처리하는 포매팅 규칙들을 비활성화
      'prettier/prettier': 'off', // prettier 플러그인이 설치되어 있다면
    },
  },
];

export default eslintConfig;
