class FondDeplacementBehavior extends Sup.Behavior {
  
  
  awake() {
    
  }

  update() {
    if(this.actor.getPosition().y <= -10){
      this.actor.spriteRenderer.destroy();
      this.destroy();
    }else{
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y -0.02)
    }
  }
}
Sup.registerBehavior(FondDeplacementBehavior);
