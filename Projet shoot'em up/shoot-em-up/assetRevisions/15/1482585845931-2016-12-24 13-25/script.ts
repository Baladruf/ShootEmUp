class SimpleEnnemiBehavior extends Sup.Behavior {
  
  public life : number;
  public speed : number;
  public frequence : number;
  public point : number;
  
  private pos1 : number;
  private pos2 : number;
  private sens : number;
  private timer;
  
  awake() {
    this.pos1 = this.actor.getPosition().x + 3;
    this.pos2 = this.actor.getPosition().x - 3;
    this.sens = 1;
    
  }

  update() {
    this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y - this.speed);
    if(this.actor.getPosition().x < this.pos1 && this.actor.getPosition().x > this.pos2){
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (this.sens * this.speed * 2), this.actor.getPosition().y);
    }else{
      this.sens *= -1;
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (this.sens * this.speed * 2), this.actor.getPosition().y);
    }
    
  }
  
  test(){
    
  }
  
  
}
Sup.registerBehavior(SimpleEnnemiBehavior);
