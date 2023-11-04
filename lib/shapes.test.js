const { Circle, Triangle, Square } = require("./shapes");

describe('Shapes', () => {
  test('Circle should return correct SVG content', () => {
    const circleRed = new Circle('red');
    const circleCustomColor = new Circle('#FF5733');
    
    expect(circleRed.getSVGContent()).toEqual('<circle cx="150" cy="100" r="100" height="100%" width="100%" fill="red" />');
    expect(circleCustomColor.getSVGContent()).toEqual('<circle cx="150" cy="100" r="100" height="100%" width="100%" fill="#FF5733" />');
  });

  test('Triangle should return correct SVG content', () => {
    const triangleBlue = new Triangle('blue');
    const triangleCustomColor = new Triangle('#663399');
    
    expect(triangleBlue.getSVGContent()).toEqual('<polygon points="150, 18 244, 182 56, 182" height="100%" width="100%" fill="blue" />');
    expect(triangleCustomColor.getSVGContent()).toEqual('<polygon points="150, 18 244, 182 56, 182" height="100%" width="100%" fill="#663399" />');
  });

  test('Square should return correct SVG content', () => {
    const squareGreen = new Square('green');
    const squareCustomColor = new Square('#009688');
    
    expect(squareGreen.getSVGContent()).toEqual('<rect x="40" y="30" width="250" height="250" fill="green" />');
    expect(squareCustomColor.getSVGContent()).toEqual('<rect x="40" y="30" width="250" height="250" fill="#009688" />');
  });
});
