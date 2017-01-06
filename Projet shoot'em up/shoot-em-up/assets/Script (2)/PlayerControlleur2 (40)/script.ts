class PlayerControlleur2Behavior extends Sup.Behavior {
  
  private cd : boolean;
  private timer : number;
  private timerInvin : number;
  private invincible : boolean;
  private colorInvin : Sup.Color;
  private colorNorm : Sup.Color;
  
  awake() {
    if(PlayerInfo2Behavior.solo){
      this.actor.spriteRenderer.destroy();
      this.destroy();
    }else{
      this.cd = true;
      this.invincible = false;
      this.colorInvin = new Sup.Color(1, 0, 0);
      this.colorNorm = new Sup.Color(1, 1, 1);
    }
  }

  update() {
    if(Sup.Input.isKeyDown("D") && this.actor.getPosition().x <= 8){
        this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + PlayerInfoBehavior.speed, this.actor.getPosition().y);
       }else if(Sup.Input.isKeyDown("Q") && this.actor.getPosition().x >= -8){
         this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x - PlayerInfoBehavior.speed, this.actor.getPosition().y);
       }
    if(Sup.Input.isKeyDown("Z") && this.actor.getPosition().y <= 4.7){
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y+ PlayerInfoBehavior.speed);
    }else if(Sup.Input.isKeyDown("S") && this.actor.getPosition().y >= -4.7){
         this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y - PlayerInfoBehavior.speed);
       }
    if(Sup.Input.wasKeyJustPressed("P") && this.cd){
      let tir : Sup.Actor;
      tir = Sup.appendScene("Prefab/TirSimple")[0];
      tir.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y)
      tir.getBehavior(TirBehavior).tag("J2");
      tir.getBehavior(TirBehavior).Active();
      if(PlayerInfo2Behavior.nvArme > 1){
        let tir2 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
        tir2.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
        tir2.getBehavior(TirDiagonalBehavior).TypeDiago(1);
        tir2.getBehavior(TirBehavior).tag("J2");
        tir2.getBehavior(TirDiagonalBehavior).Active();
        let tir3 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
        tir3.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
        tir3.getBehavior(TirDiagonalBehavior).TypeDiago(2);
        tir3.getBehavior(TirBehavior).tag("J2");
        tir3.getBehavior(TirDiagonalBehavior).Active();
        if(PlayerInfo2Behavior.nvArme === 3){
          let tir4 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
          tir4.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
          tir4.getBehavior(TirDiagonalBehavior).TypeDiago(3);
          tir4.getBehavior(TirBehavior).tag("J2");
          tir4.getBehavior(TirDiagonalBehavior).Active();
          let tir5 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
          tir5.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
          tir5.getBehavior(TirDiagonalBehavior).TypeDiago(4);
          tir5.getBehavior(TirBehavior).tag("J2");
          tir5.getBehavior(TirDiagonalBehavior).Active();
        }
      }
      this.cd = false;
      this.timer = Sup.setTimeout(PlayerInfoBehavior.cd, this.CdTir.bind(this));
     }
    if(Sup.Input.wasKeyJustPressed("E") && PlayerInfo2Behavior.updatePoint > 0 && PlayerInfo2Behavior.nvArme < 3){
      PlayerInfo2Behavior.nvArme++;
      PlayerInfo2Behavior.updatePoint--;
      PlayerInfo2Behavior.AfficheNbTir();
      PlayerInfo2Behavior.AffichePower();
    }
    if(Sup.Input.wasKeyJustPressed("A") && PlayerInfo2Behavior.updatePoint > 0 && PlayerInfo2Behavior.damage < 3){
      PlayerInfo2Behavior.damage++;
      PlayerInfo2Behavior.updatePoint--;
      PlayerInfo2Behavior.AfficheDamage();
      PlayerInfo2Behavior.AffichePower();
    }
    if(Sup.Input.wasKeyJustPressed("Z") && PlayerInfo2Behavior.updatePoint > 0 && PlayerInfo2Behavior.nvSpeed < 3){
      PlayerInfo2Behavior.nvSpeed++;
      PlayerInfo2Behavior.speed *= 1.5;
      PlayerInfo2Behavior.updatePoint--;
      PlayerInfo2Behavior.AfficheSpeed();
      PlayerInfo2Behavior.AffichePower();
    }
    if(Sup.Input.wasKeyJustPressed("R") && PlayerInfo2Behavior.updatePoint > 0 && PlayerInfo2Behavior.nvCd < 3){
      PlayerInfo2Behavior.nvCd++;
      PlayerInfo2Behavior.cd -= 300;
      PlayerInfo2Behavior.updatePoint--;
      PlayerInfo2Behavior.AfficheCooldown();
      PlayerInfo2Behavior.AffichePower();
    }
  }
  
  CdTir(){
    this.cd = true;
    Sup.clearTimeout(this.timer);
  }
  
  GameOver(){
    this.invincible = true;
    if(PlayerInfoBehavior.score < 500){
      PlayerInfoBehavior.score = 0;
    }else{
        PlayerInfoBehavior.score -= 500;
    }
    if(PlayerInfo2Behavior.damage > 1){
        PlayerInfo2Behavior.damage--;
        PlayerInfo2Behavior.AfficheDamage();
      }
      if(PlayerInfo2Behavior.nvSpeed > 1){
        PlayerInfo2Behavior.nvSpeed--;
        PlayerInfo2Behavior.AfficheSpeed();
      }
      if(PlayerInfo2Behavior.nvArme > 1){
        PlayerInfo2Behavior.nvArme--;
        PlayerInfo2Behavior.AfficheNbTir();
      }
      if(PlayerInfo2Behavior.nvCd > 1){
        PlayerInfo2Behavior.nvCd--;
        PlayerInfo2Behavior.AfficheCooldown();
      }
    this.actor.spriteRenderer.setColor(this.colorInvin);
    this.timerInvin = Sup.setTimeout(3000, this.DureeInvin.bind(this));
    this.actor.arcadeBody2D.warpPosition(0, -4);
  }
  
  DureeInvin(){
    this.invincible = false;
    this.actor.spriteRenderer.setColor(this.colorNorm);
    Sup.clearTimeout(this.timerInvin);
  }
  
  public getInvin(){
    return this.invincible;
  }
  
}
Sup.registerBehavior(PlayerControlleur2Behavior);
