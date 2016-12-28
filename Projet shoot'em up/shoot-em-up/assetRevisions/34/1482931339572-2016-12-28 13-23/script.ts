class TirEnnemiPaternAngleBehavior extends Sup.Behavior {
  
  private angle : number;
  private active : boolean;
  
  awake() {
    this.active = false;
  }

  update() {
    
  }
  
  public DefinitionAngle(p_angle : number){
    this.angle = p_angle;
    this.active = true;
  }
  
}
Sup.registerBehavior(TirEnnemiPaternAngleBehavior);
