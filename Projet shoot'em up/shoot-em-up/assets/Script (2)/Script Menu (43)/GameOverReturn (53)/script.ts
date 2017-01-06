class GameOverReturnBehavior extends Sup.Behavior {
  awake() {
    this.actor.fMouseInput.emitter.on("leftClickReleased", this.onClick.bind(this));
  }

  onClick(){
    Sup.loadScene("Menu/Menu");
  }
  
}
Sup.registerBehavior(GameOverReturnBehavior);
