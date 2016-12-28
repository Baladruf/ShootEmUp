class PlayerInfoBehavior {
  static life : number;
  static speed : number;
  static nvArme : number;
  static score : number;
  static vaisseau : Sup.Actor;
  
  public static PointEnnemiSimple(){
    this.score += 100;
  }
  
}