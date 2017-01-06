class Mode2JBehavior extends Sup.Behavior {
  awake() {
    this.actor.fMouseInput.emitter.on("leftClickReleased", this.Onclick.bind(this));
  }

  Onclick(){
    PlayerInfo2Behavior.solo = false;
    Sup.loadScene("Niveau Game/Niveau 1");
  }
}
Sup.registerBehavior(Mode2JBehavior);
