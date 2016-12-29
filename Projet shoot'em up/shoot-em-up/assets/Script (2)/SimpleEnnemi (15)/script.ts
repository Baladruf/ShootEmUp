class SimpleEnnemiBehavior extends Sup.Behavior {
  
  public life : number;
  public speed : number;
  public frequence : number;
  public point : number;
  
  
  private pos1 : number;
  private pos2 : number;
  private sens : number;
  private timer : number;
  
  awake() {
    this.pos1 = this.actor.getPosition().x + 3;
    this.pos2 = this.actor.getPosition().x - 3;
    this.sens = 1;
    this.timer = Sup.setInterval(this.frequence, this.tir.bind(this));
  }

  update() {
    if(this.actor.getPosition().y <= -5){
      this.destroy();
      this.actor.spriteRenderer.destroy();
    }
    this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y - this.speed);
    if(this.actor.getPosition().x < this.pos1 && this.actor.getPosition().x > this.pos2){
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (this.sens * this.speed * 2), this.actor.getPosition().y);
    }else{
      this.sens *= -1;
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (this.sens * this.speed * 2), this.actor.getPosition().y);
    }
    
  }
  
  tir(){
    let tir = Sup.appendScene("Prefab/tirCibler")[0];
    tir.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
  }
  
  onDestroy(){
    Sup.clearInterval(this.timer);
  }
  
  
}
Sup.registerBehavior(SimpleEnnemiBehavior);
