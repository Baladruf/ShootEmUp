class TirBehavior extends Sup.Behavior {
  
  private forward : number;
  public vitesse : number;
  
  awake() {
    
  }

  update() {
    this.forward = this.actor.getPosition().y;
    if(this.forward < 10){
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y + this.vitesse);
    }else{
      this.actor.destroy();
    }
    for(let i = 0; i < TabVaisseauxBehavior.GetEnnemis().length; i++){
      if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, TabVaisseauxBehavior.GetEnnemis()[i].arcadeBody2D)){
        let temp = TabVaisseauxBehavior.GetEnnemis()[i];
        TabVaisseauxBehavior.RemoveEnnemis(TabVaisseauxBehavior.GetEnnemis()[i]);
        temp.destroy();
        break;
      }
    }
  }
}
Sup.registerBehavior(TirBehavior);