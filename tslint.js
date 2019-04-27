const UNIVERSAL_RULES = {
  'arrow-parens': false,
  'arrow-return-shorthand': [false],
  'comment-format': [true, 'check-space'],
  'import-blacklist': [true],
  'interface-over-type-literal': false,
  'interface-name': false,
  'max-line-length': [true, 120],
  'member-access': false,
  'member-ordering': [true, { order: 'fields-first' }],
  'newline-before-return': false,
  'no-any': false,
  'no-empty-interface': false,
  'no-import-side-effect': [
    true,
    { 'ignore-module': '(\\.html|\\.css|\\.scss)$' }
  ],

  'no-invalid-this': [true, 'check-function-in-method'],
  'no-namespace': false,
  'no-null-keyword': false,
  'no-require-imports': false,
  'no-submodule-imports': [true, '@src', 'rxjs'],
  'no-this-assignment': [true, { 'allow-destructuring': true }],
  'no-trailing-whitespace': true,
  'object-literal-key-quotes': [true, 'as-needed'],
  'object-literal-sort-keys': false,
  'object-literal-shorthand': false,
  'one-variable-per-declaration': [false],
  'only-arrow-functions': [true, 'allow-declarations'],
  'ordered-imports': [false],
  'prefer-method-signature': false,
  'prefer-template': [true, 'allow-single-concat'],
  quotemark: [true, 'single', 'jsx-double'],
  semicolon: [true, 'always', 'ignore-bound-class-methods'],
  'trailing-comma': [
    false,
    {
      singleline: 'never',
      multiline: {
        objects: 'always',
        arrays: 'always',
        functions: 'ignore',
        typeLiterals: 'ignore'
      },
      esSpecCompliant: true
    }
  ],
  'triple-equals': [true, 'allow-null-check'],

  'variable-name': [
    true,
    'ban-keywords',
    'check-format',
    'allow-pascal-case',
    'allow-leading-underscore'
  ],
  // tslint-react
  'jsx-no-multiline-js': false,
  'jsx-no-lambda': false
};
const TS_RULES = {
  'no-inferrable-types': [true, 'ignore-params', 'ignore-properties'],
  'type-literal-delimiter': true,
  typedef: [true, 'parameter', 'property-declaration']
};

module.exports = {
  extends: ['tslint:recommended', 'tslint-react'],
  rules: { ...UNIVERSAL_RULES, ...TS_RULES },
  jsRules: UNIVERSAL_RULES
};
