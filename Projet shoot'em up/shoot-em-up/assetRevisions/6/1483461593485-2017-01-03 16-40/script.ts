class PlayerControllerBehavior extends Sup.Behavior {
  
  //speed : number;
  
  awake() {
    
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
      if(PlayerInfoBehavior.nvArme > 1){
        let tir2 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
        tir2.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
        tir2.getBehavior(TirDiagonalBehavior).TypeDiago(1);
        let tir3 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
        tir3.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
        tir3.getBehavior(TirDiagonalBehavior).TypeDiago(2);
        if(PlayerInfoBehavior.nvArme === 3){
          let tir4 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
          tir4.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
          tir4.getBehavior(TirDiagonalBehavior).TypeDiago(3);
          let tir5 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
          tir5.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
          tir5.getBehavior(TirDiagonalBehavior).TypeDiago(4);
        }
      }
      
     }
  }
  
}
Sup.registerBehavior(PlayerControllerBehavior);
