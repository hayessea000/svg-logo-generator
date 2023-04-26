const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What do you want to call the logo?',
    },
    {
      type: 'input',
      name: 'text',
      message: 'What 3 letter do you want?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text?',
    },
    {
      type: 'list',
      message: 'What shape do you want?',
      name: 'shape',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the shape?',
    },
  ])
  .then((data) => {
    const filename = `${data.name}.svg`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
