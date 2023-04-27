const {Triangle, Circle, Square}= require("./shapes")

test("should render a green triangle svg",()=>{
    const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="green"/>'
    const triangle = new Triangle()
    triangle.setColor("green")
    const createdSvg = triangle.render()
    expect(createdSvg).toEqual(expectedSvg)
})
test("should render a black square svg",()=>{
    const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="black"/>'
    const square = new Square()
    square.setColor("black")
    const createdSvg = square.render()
    expect(createdSvg).toEqual(expectedSvg)
})
test("should render a red circle svg",()=>{
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="red"/>'
    const circle = new Circle()
    circle.setColor("red")
    const createdSvg = circle.render()
    expect(createdSvg).toEqual(expectedSvg)
})