class ScoreJ1Behavior extends Sup.Behavior {
  awake() {
    this.actor.textRenderer.setText("Joueur 1 : "+PlayerInfoBehavior.score);
  }


}
Sup.registerBehavior(ScoreJ1Behavior);
