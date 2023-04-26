class Shape {
    setColor(shapeColor){
  
    }
    render(){
      throw new Error ("Child class must implement render() method.")
    }
  }
class Triangle extends Shape {
    constructor(shape){

      
    }

    render(){
        return ``
    }
}
class Circle extends Shape {
    constructor(shape){
      
    }

    render(){
        return ``
    }
}
class Square extends Shape {
    constructor(shape){
      
    }

    render(){
        return ``
    }
}