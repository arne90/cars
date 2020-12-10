class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain'); // Will be called as son as the class is created
  }

  preload() {
    // Load our images or sounds
    this.load.image("face", "images/face.png");
    this.load.image("button1", "images/ui/buttons/1/1.png");
    this.load.image("button2", "images/ui/buttons/2/5.png");
  }

  create() {
    // Define our objects

    //
    // GRID:
    let gridConfig = {rows: 5, cols: 5, scene: this};
    let alignGrid = new AlignGrid(gridConfig);
    alignGrid.show();
    //
    //
    this.sb = new ScoreBox({scene: this});
    this.sb.x = game.config.width / 2;
    this.sb.y = 50;
    model.score = 100;

    this.face = this.add.sprite(0, 0, "face");
    alignGrid.placeAtIndex(7, this.face);
    alignGrid.showNumbers();
    Align.scaleToGameW(this.face, 0.2);

    // Button:
    let fireText = {color:"red", fontSize: 20};

    let flatButton = new FlatButton({scene: this, key: "button1", text: "Press me to fire!", x: 240, y: 100, event: "button_pressed", params: "fire_lasers", textConfig: fireText});
    let flatButton2 = new FlatButton({scene: this, key: "button2", text: "Press me to destruct!", x: 240, y: 300, event: "button_pressed", params: "self_destruct"});

    emitter.on("button_pressed", this.buttonPressed, this);
    
    console.log("Blir scenene laget eller????");
  }
  
   buttonPressed(params) {
    console.log("WORDKKD");
    console.log("Button pressed: ", params);
    this.scene.start("SceneOver")
  }


  update() {
    // Constant running loop
  }

  customFunctions() {
    // Call when needed
  }
}