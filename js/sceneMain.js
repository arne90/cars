class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain'); // Will be called as son as the class is created
  }

  preload() {
    // Load our images or sounds
    this.load.image("road", "images/road.jpg");

    this.load.spritesheet("cars", "images/cars.png", {frameWidth:60, frameHeight:126});
    // this.load.image("line", "images/line.png");
  }

  create() {
    // Define our objects
    const road = new Road({scene:this});
    road.x = this.game.config.width/2;
  }

  update() {
    // Constant running loop
  }

  customFunctions() {
    // Call when needed
  }
}