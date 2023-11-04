class Shape {
  constructor(color) {
    this.color = color;
  }

  getSVGContent() {
    return '';
  }
}

class Circle extends Shape {
  getSVGContent() {
    return `<circle cx="150" cy="100" r="100" height="100%" width="100%" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  getSVGContent() {
    return `<polygon points="150, 18 244, 182 56, 182" height="100%" width="100%" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  getSVGContent() {
    return `<rect x="40" y="30" width="250" height="250" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };