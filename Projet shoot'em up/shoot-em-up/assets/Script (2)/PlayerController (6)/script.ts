class PlayerControllerBehavior extends Sup.Behavior {
  
  //speed : number;
  
  awake() {
    PlayerInfoBehavior.speed = 0.05;
  }

  update() {
    if(Sup.Input.isKeyDown("RIGHT") && this.actor.getPosition().x <= 8){
        this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + PlayerInfoBehavior.speed, this.actor.getPosition().y);
       }else if(Sup.Input.isKeyDown("LEFT") && this.actor.getPosition().x >= -8){
         this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x - PlayerInfoBehavior.speed, this.actor.getPosition().y);
       }
    if(Sup.Input.isKeyDown("UP") && this.actor.getPosition().y <= 4.7){
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y+ PlayerInfoBehavior.speed);
    }else if(Sup.Input.isKeyDown("DOWN") && this.actor.getPosition().y >= -4.7){
         this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y - PlayerInfoBehavior.speed);
       }
    if(Sup.Input.wasKeyJustPressed("SPACE")){
      let tir : Sup.Actor;
      tir = Sup.appendScene("Prefab/TirSimple")[0];
      tir.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y)
      
     }
  }
  
}
Sup.registerBehavior(PlayerControllerBehavior);
