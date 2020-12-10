class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain'); // Will be called as son as the class is created
  }

  preload() {
    // Load our images or sounds
    this.load.image("road", "images/road.jpg");
    this.load.spritesheet("cars", "images/cars.png", {frameWidth:60, frameHeight:126});
    this.load.image("line", "images/line.png");
    this.load.image("pcar1", "images/pcar1.png");
    this.load.image("pcar2", "images/pcar2.png");
    this.load.image("cone", "images/cone.png");
    this.load.image("barrier", "images/barrier.png");
  }

  create() {
    // Define our objects
    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();
    //
    //
    this.sb = new ScoreBox({scene:this});
    this.sb.x = game.config.width-50;
    this.sb.y = 50;

    model.score = 0;

    this.road = new Road({
      scene: this
    });
    this.road.x = game.config.width * 0.25;
    console.log("road:", this.road);
    this.road.makeLines();

    this.alignGrid = new AlignGrid({scene: this, rows: 5, cols: 5});
    this.alignGrid.showNumbers();
    this.alignGrid.placeAtIndex(4, this.sb);
  }

  update() {
    // Constant running loop
    this.road.moveLines();
    this.road.moveObject();
  }

  customFunctions() {
    // Call when needed
  }
}