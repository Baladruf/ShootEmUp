class TirDiagonalBehavior extends Sup.Behavior {
  
  private forward : number;
  public vitesse : number;
  private angle : number;
  private angleD : number;
  private tagJ : string;
  private active : boolean;
  
  awake() {
    this.angle = 0;
    this.angleD = 0;
    this.active = false;
  }
  
  Active() {
    this.active = true;
  }
  
  public TypeDiago(diag : number){
    switch(diag){
      case 1 : 
        this.angle = Math.PI / 3;
        this.angleD = -60;
        break;
      case 2 :
        this.angle = (Math.PI / 2) + (Math.PI / 6);
        this.angleD = 60;
        break;
      case 3 : 
        this.angle = Math.PI / 6;
        this.angleD = 30;
        break;
      case 4 : 
        this.angle = 5 * Math.PI / 6;
        this.angleD = -30;
        break;
               }
    this.actor.rotateEulerZ(this.angleD);
    Sup.log("cos = "+Math.cos(this.angle)+", sin = "+Math.sin(this.angle));
  }

  update() {
    if(this.active){
      this.forward = this.actor.getPosition().y;
      if(this.forward < 10){
        this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (Math.cos(this.angle) * this.vitesse), this.actor.getPosition().y + (Math.sin(this.angle) * this.vitesse));
      }else{
        this.actor.destroy();
      }
      for(let i = 0; i < TabVaisseauxBehavior.GetEnnemis().length; i++){
        if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, TabVaisseauxBehavior.GetEnnemis()[i].arcadeBody2D)){
          let temp = TabVaisseauxBehavior.GetEnnemis()[i];
          TabVaisseauxBehavior.RemoveEnnemis(TabVaisseauxBehavior.GetEnnemis()[i]);
          if(temp.getName() === "SimpleEnnemi"){
            if(this.tagJ === "J1"){
              PlayerInfoBehavior.PointEnnemiSimple();
              PlayerInfoBehavior.AfficheScore();
            }else{
              PlayerInfo2Behavior.PointEnnemiSimple();
              PlayerInfo2Behavior.AfficheScore();
            }
            if(Sup.Math.Random.integer(0, 100) < 31){
                  let tempCollec = Sup.appendScene("Prefab/CollectiblePoint")[0];
                  tempCollec.arcadeBody2D.warpPosition(temp.getPosition().x, temp.getPosition().y);
            }

          }
          temp.destroy();
          this.actor.spriteRenderer.destroy();
          this.destroy();
          break;
        }
      }
    }
  }
  
  public tag(st : string){
    this.tagJ = st;
  }
  
}
Sup.registerBehavior(TirDiagonalBehavior);
