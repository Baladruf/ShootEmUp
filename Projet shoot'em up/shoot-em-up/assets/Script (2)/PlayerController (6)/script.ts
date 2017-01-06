class PlayerControllerBehavior extends Sup.Behavior {
  
  private cd : boolean;
  private timer : number;
  private timerInvin : number;
  private invincible : boolean;
  private colorInvin : Sup.Color;
  private colorNorm : Sup.Color;
  awake() {
    this.cd = true;
    this.invincible = false;
    this.colorInvin = new Sup.Color(1, 0, 0);
    this.colorNorm = new Sup.Color(1, 1, 1);
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
    if(Sup.Input.wasKeyJustPressed("E") && PlayerInfoBehavior.updatePoint > 0 && PlayerInfoBehavior.nvArme < 3){
      PlayerInfoBehavior.nvArme++;
      PlayerInfoBehavior.updatePoint--;
      PlayerInfoBehavior.AfficheNbTir();
      PlayerInfoBehavior.AffichePower();
    }
    if(Sup.Input.wasKeyJustPressed("A") && PlayerInfoBehavior.updatePoint > 0 && PlayerInfoBehavior.damage < 3){
      PlayerInfoBehavior.damage++;
      PlayerInfoBehavior.updatePoint--;
      PlayerInfoBehavior.AfficheDamage();
      PlayerInfoBehavior.AffichePower();
    }
    if(Sup.Input.wasKeyJustPressed("Z") && PlayerInfoBehavior.updatePoint > 0 && PlayerInfoBehavior.nvSpeed < 3){
      PlayerInfoBehavior.nvSpeed++;
      PlayerInfoBehavior.speed *= 1.5;
      PlayerInfoBehavior.updatePoint--;
      PlayerInfoBehavior.AfficheSpeed();
      PlayerInfoBehavior.AffichePower();
    }
    if(Sup.Input.wasKeyJustPressed("R") && PlayerInfoBehavior.updatePoint > 0 && PlayerInfoBehavior.nvCd < 3){
      PlayerInfoBehavior.nvCd++;
      PlayerInfoBehavior.cd -= 300;
      PlayerInfoBehavior.updatePoint--;
      PlayerInfoBehavior.AfficheCooldown();
      PlayerInfoBehavior.AffichePower();
    }
    if(Sup.Input.isKeyDown("SPACE") && this.cd){
      let tir : Sup.Actor;
      tir = Sup.appendScene("Prefab/TirSimple")[0];
      tir.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
      tir.getBehavior(TirBehavior).tag("J1");
      tir.getBehavior(TirBehavior).Active();
      if(PlayerInfoBehavior.nvArme > 1){
        let tir2 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
        tir2.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
        tir2.getBehavior(TirDiagonalBehavior).TypeDiago(1);
        tir2.getBehavior(TirDiagonalBehavior).tag("J1");
        tir2.getBehavior(TirDiagonalBehavior).Active();
        let tir3 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
        tir3.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
        tir3.getBehavior(TirDiagonalBehavior).TypeDiago(2);
        tir3.getBehavior(TirDiagonalBehavior).tag("J1");
        tir3.getBehavior(TirDiagonalBehavior).Active();
        if(PlayerInfoBehavior.nvArme === 3){
          let tir4 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
          tir4.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
          tir4.getBehavior(TirDiagonalBehavior).TypeDiago(3);
          tir4.getBehavior(TirDiagonalBehavior).tag("J1");
          tir4.getBehavior(TirDiagonalBehavior).Active();
          let tir5 = Sup.appendScene("Prefab/TirSimpleDiag")[0];
          tir5.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
          tir5.getBehavior(TirDiagonalBehavior).TypeDiago(4);
          tir5.getBehavior(TirDiagonalBehavior).tag("J1");
          tir5.getBehavior(TirDiagonalBehavior).Active();
        }
      }
      this.cd = false;
      this.timer = Sup.setTimeout(PlayerInfoBehavior.cd, this.CdTir.bind(this));
    }
  }
  
  CdTir(){
    this.cd = true;
    Sup.clearTimeout(this.timer);
  }
  
  GameOver(){
    this.invincible = true;
    if(PlayerInfo2Behavior.solo && PlayerInfoBehavior.life === 0){
      Sup.loadScene("Menu/Game Over");
    }else{
      if(PlayerInfo2Behavior.solo){
        PlayerInfoBehavior.life--;
        PlayerInfoBehavior.AfficheLife();
      }
      else if(PlayerInfoBehavior.score < 500){
        PlayerInfoBehavior.score = 0;
      }else{
        PlayerInfoBehavior.score -= 500;
      }
      this.actor.spriteRenderer.setColor(this.colorInvin);
      this.timerInvin = Sup.setTimeout(3000, this.DureeInvin.bind(this));
      this.actor.arcadeBody2D.warpPosition(0, -4);
      if(PlayerInfoBehavior.damage > 1){
        PlayerInfoBehavior.damage--;
        PlayerInfoBehavior.AfficheDamage();
      }
      if(PlayerInfoBehavior.nvSpeed > 1){
        PlayerInfoBehavior.nvSpeed--;
        PlayerInfoBehavior.AfficheSpeed();
      }
      if(PlayerInfoBehavior.nvArme > 1){
        PlayerInfoBehavior.nvArme--;
        PlayerInfoBehavior.AfficheNbTir();
      }
      if(PlayerInfoBehavior.nvCd > 1){
        PlayerInfoBehavior.nvCd--;
        PlayerInfoBehavior.AfficheCooldown();
      }
    }
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
Sup.registerBehavior(PlayerControllerBehavior);
