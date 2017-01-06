class PaterneTestBehavior extends Sup.Behavior {
  
  public speed : number;
  private angle : number;
  
  awake() {
    this.angle = 0;
  }

  update() {
    if(this.angle = 2 * Math.PI){
      this.angle = 0;
    }else{
      this.angle += Math.PI / 8;
    }
    this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (Math.cos(this.angle) * 0.05), this.actor.getPosition().y - this.speed);
  }
}
Sup.registerBehavior(PaterneTestBehavior);
