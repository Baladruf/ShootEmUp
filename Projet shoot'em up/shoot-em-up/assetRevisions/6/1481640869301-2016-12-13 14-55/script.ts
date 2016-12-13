class PlayerControllerBehavior extends Sup.Behavior {
  
  //speed : number;
  
  awake() {
    PlayerInfoBehavior.speed = 0.05;
  }

  update() {
    if(Sup.Input.isKeyDown("RIGHT")){
        this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + PlayerInfoBehavior.speed, this.actor.getPosition().y);
       }else if(Sup.Input.isKeyDown("LEFT")){
         this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x - PlayerInfoBehavior.speed, this.actor.getPosition().y);
       }
    if(Sup.Input.isKeyDown("UP")){
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y+ PlayerInfoBehavior.speed);
    }else if(Sup.Input.isKeyDown("DOWN")){
         this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y - PlayerInfoBehavior.speed);
       }
  }
}
Sup.registerBehavior(PlayerControllerBehavior);
