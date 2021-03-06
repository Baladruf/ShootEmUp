class TirEnnemiCiblerBehavior extends Sup.Behavior {
  
  private forward : number;
  private vectorForward : Sup.Actor;
  private timer : Sup.Tween;
  
  public speed : number;
  
  awake() {
    this.vectorForward = this.actor.lookAt(PlayerInfoBehavior.vaisseau.getPosition());
    this.timer = new Sup.Tween(this.actor, {});
    this.timer.to(this.test.bind, 2);
    this.timer.yoyo(true);
    this.timer.start();
  }

  update() {
    this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (this.vectorForward.getPosition().x * this.speed), this.actor.getPosition().y + (this.vectorForward.getPosition().y * this.speed))
    
  }
  
  test(){
    //this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + 0.03, this.actor.getPosition().y + 0.03)
  }
  
}
Sup.registerBehavior(TirEnnemiCiblerBehavior);