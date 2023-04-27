const inquirer = require('inquirer');
const fs = require('fs');
const makeShape = require('./lib/shapes');
// const path = require('path')
// const OUTPUT_DIR =path.resolve(__dirname, 'examples')
// const outputPath =path.join(OUTPUT_DIR, 'logo.svg')

inquirer
  .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What 3 charactors do you want?',
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
      let shapeSwitch ;
      switch(data.shape){
        case "Triangle":
            shapeSwitch= new makeShape.Triangle()
            break;
        case "Circle":
            shapeSwitch= new makeShape.Circle()
            break;
        case "Square":
            shapeSwitch= new makeShape.Square()
            break;
        default:
            console.log("noooooooooooo")
      }
      shapeSwitch.setColor(data.shapeColor)
    
    let writeLogo = function(data){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        ${shapeSwitch.render()}
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        
        </svg>`
    }
    const filename = 'logo.svg';

    fs.writeFile(filename, writeLogo(data), (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
    // function exampleFiles(){
    //     if(!fs.existsSync(OUTPUT_DIR)){
    //         fs.mkdirSync(OUTPUT_DIR)
    //     }fs.writeFileSync(outputPath, render(filename))
    // }exampleFiles()
  });

/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */