class TirEnnemiPaternAngleBehavior extends Sup.Behavior {
  
  private angle : number;
  private active : boolean;
  public speed : number;
  
  awake() {
    this.active = false;
  }

  update() {
    if(this.active){
      Sup.log("cos "+Math.cos(this.angle)+", sin "+Math.sin(this.angle));
      if(this.angle === 10){
        this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x - this.speed, this.actor.getPosition().y - this.speed);
      }else{
        this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (this.speed * Math.cos(this.angle)), this.actor.getPosition().y + (this.speed * Math.sin(this.angle)));
      }
      if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, PlayerInfoBehavior.vaisseau.arcadeBody2D) && !PlayerInfoBehavior.vaisseau.getBehavior(PlayerControllerBehavior).getInvin()){
        PlayerInfoBehavior.vaisseau.getBehavior(PlayerControllerBehavior).GameOver();
        this.actor.spriteRenderer.destroy();
        this.destroy();
      }
      if(!PlayerInfo2Behavior.solo && Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, PlayerInfo2Behavior.vaisseau.arcadeBody2D) && !PlayerInfo2Behavior.vaisseau.getBehavior(PlayerControlleur2Behavior).getInvin()){
        PlayerInfo2Behavior.vaisseau.getBehavior(PlayerControlleur2Behavior).GameOver();
        this.actor.spriteRenderer.destroy();
        this.destroy();
      }
      if(this.actor.getPosition().x < -7 || this.actor.getPosition().x > 7 || this.actor.getPosition().y < -7 || this.actor.getPosition().y > 7){
        this.actor.spriteRenderer.destroy();
        this.destroy();
      }
    }
  }
  
  public DefinitionAngle(p_angle : number){
    this.angle = p_angle;
    this.active = true;
  }
  
}
Sup.registerBehavior(TirEnnemiPaternAngleBehavior);
