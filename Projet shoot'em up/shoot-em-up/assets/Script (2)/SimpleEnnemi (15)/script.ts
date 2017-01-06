class SimpleEnnemiBehavior extends Sup.Behavior {
  
  public life : number;
  public speed : number;
  public frequence : number;
  
  public typeDeplacement : number;
  public paternTir : number;
  
  private etape : number;
  
  private pos1 : number;
  private pos2 : number;
  private sens : number;
  private timer : number;
  private timerDeplac : number;
  private stop : boolean;
  private speedVar : number;
  private degre : number;
  
  awake() {
    this.pos1 = this.actor.getPosition().x + 3;
    this.pos2 = this.actor.getPosition().x - 3;
    this.sens = 1;
    switch(this.paternTir){
      case 1 :
        this.timer = Sup.setInterval(this.frequence, this.tir.bind(this));
        break;
      case 2 :
        this.etape = 1;
        this.timer = Sup.setInterval(this.frequence, this.tirPatern1.bind(this));
        break;
    }
    if(this.typeDeplacement === 2){
      this.stop = false;
      this.timerDeplac = Sup.setInterval(700, this.deplacement.bind(this));
    }else if(this.typeDeplacement === 3){
      this.speedVar = 0;
      this.degre = 0.005
    }
  }

  update() {
    if(this.actor.getPosition().y <= -5){
      this.destroy();
      this.actor.spriteRenderer.destroy();
    }
    switch(this.typeDeplacement){
      case 1 :
        this.deplacementZigZag();
        break;
      case 2 :
        this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y - this.speed);
        if(!this.stop){
          this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (this.speed * this.sens * 3), this.actor.getPosition().y);
        }
        break;
      case 3 :
        this.deplacementRea();
        break;
    }
    
  }
  
  tirPatern1(){
    if(this.actor.getPosition().y <= 5){
      switch(this.etape){
        case 1 :
          this.tirPatern1post(4 * Math.PI / 3);
          break;
        case 2 : 
          this.tirPatern1post(5 * Math.PI / 3);
          break;
        case 3 :
          this.tirPatern1post(10);
          break;
        case 4 :
          this.tir();
          break;
      }
      this.etape++;
      if(this.etape === 6)
        this.etape = 1;
    }
  }
  
  tirPatern1post(angle : number){
    let tir = Sup.appendScene("Prefab/tirPaternAngle")[0];
    tir.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
    tir.getBehavior(TirEnnemiPaternAngleBehavior).DefinitionAngle(angle);
    
  }
  
  tir(){
    if(this.actor.getPosition().y <= 5){
      let tir = Sup.appendScene("Prefab/tirCibler")[0];
      tir.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
      tir.getBehavior(TirEnnemiCiblerBehavior).vaisseau = PlayerInfoBehavior.vaisseau;
      tir.getBehavior(TirEnnemiCiblerBehavior).active = true;
      if(!PlayerInfo2Behavior.solo){
        let tir2 = Sup.appendScene("Prefab/tirCibler")[0];
        tir2.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y);
        tir2.getBehavior(TirEnnemiCiblerBehavior).vaisseau = PlayerInfo2Behavior.vaisseau;
        tir2.getBehavior(TirEnnemiCiblerBehavior).active = true;
      }
    }
  }
  
  onDestroy(){
    Sup.clearInterval(this.timer);
    if(this.typeDeplacement === 2)
      Sup.clearInterval(this.timerDeplac);
  }
  
  deplacementZigZag(){
    this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y - this.speed);
    if(this.actor.getPosition().x < this.pos1 && this.actor.getPosition().x > this.pos2){
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (this.sens * this.speed * 2), this.actor.getPosition().y);
    }else{
      this.sens *= -1;
      this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + (this.sens * this.speed * 2), this.actor.getPosition().y);
    }
  }
  
  deplacement(){
    this.stop = !this.stop;
    if(this.stop)
      this.sens = -this.sens;
  }
  
  deplacementRea(){
    this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x, this.actor.getPosition().y - this.speed);
    this.actor.arcadeBody2D.warpPosition(this.actor.getPosition().x + this.speedVar, this.actor.getPosition().y);
    this.speedVar += this.degre;
    if(this.speedVar <= -0.15 || this.speedVar >= 0.15){
      this.degre *= -1;
    }
  }
  
  
}
Sup.registerBehavior(SimpleEnnemiBehavior);
