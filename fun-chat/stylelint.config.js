export default {
  rules: {
    'selector-class-pattern': [
      '^[a-z]([a-z0-9]*)(__(?:[a-z0-9]+))?(--[a-z0-9]+)?$',
      {
        message:
          'Expected class selector to be in BEM format (block__element--modifier)',
      },
    ],
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'order/properties-alphabetical-order': null,
    'no-descending-specificity': null,
    'selector-max-id': 1,
  },
  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order',
    'stylelint-config-standard-scss',
  ],
};
