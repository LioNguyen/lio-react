import { componentGenerator } from './generators/actions/index.mjs'

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  // plop generator code
  plop.setGenerator('component', componentGenerator)
}
