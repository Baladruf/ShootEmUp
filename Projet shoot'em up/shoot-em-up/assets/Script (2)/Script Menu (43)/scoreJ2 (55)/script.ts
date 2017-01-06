class ScoreJ2Behavior extends Sup.Behavior {
  awake() {
    if(!PlayerInfo2Behavior.solo)
      this.actor.textRenderer.setText("Joueur 2 : "+PlayerInfo2Behavior.score);
    else
      this.actor.textRenderer.setText("");
  }

}
Sup.registerBehavior(ScoreJ2Behavior);
