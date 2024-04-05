const COMPONENT_PATH = 'src/components'
const TEMPLATE_PATH = 'generators/templates'

/** @type {Partial<import('plop').PlopGeneratorConfig>} */
export const componentGenerator = {
  description: 'Generate a component',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Please input component name:',
    },
    {
      type: 'confirm',
      name: 'isTestIncluded',
      message: 'Include unit test?',
      default: false,
    },
  ],
  actions: function (data) {
    const { isTestIncluded } = data

    const defaultActionList = [
      // Create component
      {
        type: 'add',
        path: `${COMPONENT_PATH}/{{dashCase componentName}}/index.tsx`,
        templateFile: `${TEMPLATE_PATH}/component.tsx.hbs`,
      },
      // Create styles
      {
        type: 'add',
        path: `${COMPONENT_PATH}/{{dashCase componentName}}/styles.ts`,
        templateFile: `${TEMPLATE_PATH}/component.styles.ts.hbs`,
      },
    ]

    // Create unit test
    if (isTestIncluded) {
      defaultActionList.push({
        type: 'add',
        path: `${COMPONENT_PATH}/{{dashCase componentName}}/{{properCase componentName}}.test.tsx`,
        templateFile: `${TEMPLATE_PATH}/component.test.tsx.hbs`,
      })
    }

    return defaultActionList
  },
}
