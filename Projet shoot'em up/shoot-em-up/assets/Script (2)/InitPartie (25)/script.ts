class InitPartieBehavior extends Sup.Behavior {
  public pv : number;
  awake() {
    PlayerInfoBehavior.life = this.pv;
    PlayerInfoBehavior.score = 0;
  }
}
Sup.registerBehavior(InitPartieBehavior);
