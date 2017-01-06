class PaterneTestBehavior extends Sup.Behavior {
  
  public speed : number;
  private speedVar : number;
  private degre : number;
  private sens : number;
  private stop : boolean;
  private timer : number;
  
  awake() {
    this.stop = false;
    this.sens = 1;
    this.speedVar = 0;
    this.degre = 0.005
  }

  update() {
    this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y - this.speed);
    this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + this.speedVar, this.actor.getPosition().y);
    this.speedVar += this.degre;
    if(this.speedVar <= -0.15 || this.speedVar >= 0.15){
      this.degre *= -1;
    }
  }
  
  deplacement(){
    this.stop = !this.stop;
    if(this.stop)
      this.sens = -this.sens;
  }
  
}
Sup.registerBehavior(PaterneTestBehavior);
