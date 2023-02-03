/* eslint-disable*/

const common = [
  '--require-module ts-node/register' // Load TypeScript module
]

const ecommerce_backend = [
  ...common,
  'tests/apps/ecommerce/backend/rest/features/**/*.feature',
  '--require tests/apps/ecommerce/backend/rest/features/step_definitions/*.steps.ts'
].join(' ')

module.exports = {
  ecommerce_backend
}
