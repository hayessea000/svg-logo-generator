// if(data.shape === 'circle'){
//     generateShape = 'circle'
//     this.color= data.color
// }else if(data.shape === 'square'){
//     generateShape = 'square'
//     this.color= data.color
// }else{
//     generateShape = 'triangle'
//     this.color= data.color
// }
class Shape {
    constructor(shapeColor){
      
    }
  
    renderInnerHTML(){
  
    }
    render(){
      throw new Error ("Child class must implement render() method.")
    }
  }
class Triangle extends Shape {
    constructor(shape){
      
    }

    render(){
        return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`
    }
}
class Circle extends Shape {
    constructor(shape){
      
    }

    render(){
        return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`
    }
}
class Square extends Shape {
    constructor(shape){
      
    }

    render(){
        return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`
    }
}