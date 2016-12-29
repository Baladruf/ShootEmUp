class CollectibleBehavior extends Sup.Behavior {

  public val : number;
  public vitesse : number;
  
  update() {
    if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, PlayerInfoBehavior.vaisseau.arcadeBody2D)){
      if(this.actor.getName() === "Piece"){
        PlayerInfoBehavior.score += this.val;
        PlayerInfoBehavior.AfficheScore();
        this.dieCollec();
      }
      else if(this.actor.getName() === "Life"){
        PlayerInfoBehavior.life += this.val;
        PlayerInfoBehavior.AfficheLife();
        this.dieCollec();
      }else if(this.actor.getName() === "Power"){
        PlayerInfoBehavior.updatePoint = this.val;
        PlayerInfoBehavior.AffichePower();
        this.dieCollec();
      }
    }
    if(this.actor.getPosition().y > -5){
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y - this.vitesse);
    }else{
      this.actor.spriteRenderer.destroy();
      this.destroy();
    }
  }
  
  dieCollec(){
    this.actor.spriteRenderer.destroy();
    this.destroy();
  }
  
}
Sup.registerBehavior(CollectibleBehavior);
