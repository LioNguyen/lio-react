const COMPONENT_PATH = 'src'
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
      type: 'list',
      name: 'componentFolder',
      message: 'Please select component folder:',
      choices: [
        'shared/components/atoms',
        'shared/components/molecules',
        'shared/components/organisms',
        'shared/components/templates',
        'pages',
      ],
    },
    {
      type: 'confirm',
      name: 'unitTestIncluded',
      message: 'Add unit test?',
      default: false,
    },
  ],
  actions: function (data) {
    const { componentFolder, unitTestIncluded } = data

    const defaultActionList = [
      // Create component
      {
        type: 'add',
        path: `${COMPONENT_PATH}/${componentFolder}/{{dashCase componentName}}/{{dashCase componentName}}.tsx`,
        templateFile: `${TEMPLATE_PATH}/component.tsx.hbs`,
      },
      // Create styles
      {
        type: 'add',
        path: `${COMPONENT_PATH}/${componentFolder}/{{dashCase componentName}}/{{dashCase componentName}}.styles.ts`,
        templateFile: `${TEMPLATE_PATH}/component.styles.ts.hbs`,
      },
      // Create export
      {
        type: 'add',
        path: `${COMPONENT_PATH}/${componentFolder}/{{dashCase componentName}}/index.tsx`,
        templateFile: `${TEMPLATE_PATH}/component.index.ts.hbs`,
      },
    ]

    if (unitTestIncluded) {
      defaultActionList.push({
        type: 'add',
        path: `${COMPONENT_PATH}/${componentFolder}/{{dashCase componentName}}/{{dashCase componentName}}.test.tsx`,
        templateFile: `${TEMPLATE_PATH}/component.test.tsx.hbs`,
      })
    }

    return defaultActionList
  },
}
