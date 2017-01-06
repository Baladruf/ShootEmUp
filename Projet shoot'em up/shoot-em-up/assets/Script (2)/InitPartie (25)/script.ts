class InitPartieBehavior extends Sup.Behavior {
  public pv : number;
  public speed : number;
  awake() {
    PlayerInfoBehavior.life = this.pv;
    PlayerInfoBehavior.score = 0;
    PlayerInfoBehavior.speed = this.speed;
    PlayerInfoBehavior.updatePoint = 0;
    PlayerInfoBehavior.nvArme = 1;
    PlayerInfoBehavior.cd = 1000;
    PlayerInfoBehavior.nvCd = 1;
    PlayerInfoBehavior.nvSpeed = 1;
    PlayerInfoBehavior.damage = 1;
    
    
  }
  
  start(){
    if(!PlayerInfo2Behavior.solo){
      PlayerInfo2Behavior.life = this.pv;
      PlayerInfo2Behavior.score = 0;
      PlayerInfo2Behavior.speed = this.speed;
      PlayerInfo2Behavior.updatePoint = 0;
      PlayerInfo2Behavior.nvArme = 1;
      PlayerInfo2Behavior.cd = 1000;
      PlayerInfo2Behavior.nvCd = 1;
      PlayerInfo2Behavior.nvSpeed = 1;
      PlayerInfo2Behavior.damage = 1;
    }
  }
  
}
Sup.registerBehavior(InitPartieBehavior);
