class TirEnnemiCiblerBehavior extends Sup.Behavior {
  
  private forward : number;
  private vectorForward : Sup.Math.Vector2;
  private angle : number;
  active : boolean;
  
  public speed : number;
  
  private dis : number;
  private vectRef : Sup.Math.Vector2;
  vaisseau : Sup.Actor;
  
  awake() {
    this.vectorForward = new Sup.Math.Vector2();
    this.vectRef = new Sup.Math.Vector2();
    this.active = false;
  }
  
  start(){
    this.vectorForward.set(this.vaisseau.getPosition().x - this.actor.getPosition().x, this.vaisseau.getPosition().y - this.actor.getPosition().y);
    this.vectRef.set(3, 3);
    this.dis = this.vectorForward.length() / this.vectRef.length();
  }

  update() {
    if(this.active){
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + ((this.vectorForward.x / this.dis) * this.speed), this.actor.getPosition().y + ((this.vectorForward.y / this.dis) * this.speed))
      if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, PlayerInfoBehavior.vaisseau.arcadeBody2D) && !PlayerInfoBehavior.vaisseau.getBehavior(PlayerControllerBehavior).getInvin()){
        PlayerInfoBehavior.vaisseau.getBehavior(PlayerControllerBehavior).GameOver();
        this.actor.spriteRenderer.destroy();
        this.destroy();
      }
      if(!PlayerInfo2Behavior.solo && Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, PlayerInfo2Behavior.vaisseau.arcadeBody2D) && !PlayerInfo2Behavior.vaisseau.getBehavior(PlayerControlleur2Behavior).getInvin()){
        PlayerInfo2Behavior.vaisseau.getBehavior(PlayerControlleur2Behavior).GameOver();
        this.actor.spriteRenderer.destroy();
        this.destroy();
        return;
      }
      if(this.actor.getPosition().x < -7 || this.actor.getPosition().x > 7 || this.actor.getPosition().y < -7 || this.actor.getPosition().y > 7){
        this.actor.spriteRenderer.destroy();
        this.destroy();
        return;
      }
    }
  }
  
}
Sup.registerBehavior(TirEnnemiCiblerBehavior);