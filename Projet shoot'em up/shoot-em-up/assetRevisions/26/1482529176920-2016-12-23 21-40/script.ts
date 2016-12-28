class TirEnnemiCiblerBehavior extends Sup.Behavior {
  
  private forward : number;
  
  public speed : number;
  
  awake() {
    this.actor.lookAt(PlayerInfoBehavior.vaisseau.getPosition());
    
  }

  update() {
    
  }
}
Sup.registerBehavior(TirEnnemiCiblerBehavior);
