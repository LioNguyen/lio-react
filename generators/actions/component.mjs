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
      default: true,
    },
  ],
  actions: function (data) {
    const { isTestIncluded } = data

    const defaultActionList = [
      {
        type: 'add',
        path: `${COMPONENT_PATH}/{{dashCase componentName}}/{{properCase componentName}}.tsx`,
        templateFile: `${TEMPLATE_PATH}/component.tsx.hbs`,
      },
      {
        type: 'add',
        path: `${COMPONENT_PATH}/{{dashCase componentName}}/{{properCase componentName}}.styles.scss`,
        templateFile: `${TEMPLATE_PATH}/component.styles.scss.hbs`,
      },
      {
        type: 'add',
        path: `${COMPONENT_PATH}/{{dashCase componentName}}/index.ts`,
        templateFile: `${TEMPLATE_PATH}/component.index.ts.hbs`,
      },
    ]

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
