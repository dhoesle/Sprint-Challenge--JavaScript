// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
// }

// CuboidMaker.prototype.volume = function(){
//     let volume = this.length * this.width * this.height;
//     return volume;
// };

// CuboidMaker.prototype.surfaceArea = function(){
//     let surfaceArea = (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
//     return surfaceArea;
// };

class CuboidMaker2{
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    };
    volume(){
        let volume = this.length * this.width * this.height;
        return volume;
    };
    surfaceArea() {
        let surfaceArea = (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
        return surfaceArea;
    };
};

const cuboid2 = new CuboidMaker2 ({
    length: 4,
    width: 5,
    heigth: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.