const componentPath = '../src/{{path}}/{{type}}/{{pascalCase name}}';

module.exports = {
  description: 'Создать новый компонент',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Выберите тип компонента',
      choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
    },
    {
      type: 'input',
      name: 'path',
      message: 'Введите путь по которому расположить компонент',
      default: 'components',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Введите название компонента',
      default: 'Button',
      validate: (value, { type, path }) => {
        if (/.+/.test(value)) {
          return true;
        }

        return 'Введите название';
      },
    },
    {
      type: 'confirm',
      name: 'withTest',
      message: 'Добавить файл тестов?',
      default: true,
    },
  ],
  actions: (data) => {
    const files = [
      {
        type: 'add',
        path: `${componentPath}/{{pascalCase name}}.tsx`,
        templateFile: './component/templates/component.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/{{pascalCase name}}.styles.ts`,
        templateFile: './component/templates/styles.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/{{pascalCase name}}.story.tsx`,
        templateFile: './component/templates/story.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/index.ts`,
        templateFile: './component/templates/index.ts.hbs',
        abortOnFail: true,
      },
    ];

    if (data.withTest) {
      files.push({
        type: 'add',
        path: `${componentPath}/{{pascalCase name}}.test.tsx`,
        templateFile: './component/templates/test.tsx.hbs',
        abortOnFail: true,
      });
    }

    return files;
  },
};
