class PlayerInfoBehavior {
  static life : number;
  static speed : number;
  static nvArme : number;
  static score : number;
  static vaisseau : Sup.Actor;
  static updatePoint : number;

  private static c_score = "score : ";
  private static c_life = "life : ";
  private static c_power = "power : ";

  static inter : Sup.Actor;
  
  public static PointEnnemiSimple(){
    this.score += 100;
  }

  public static AfficheScore(){
    this.inter.getChild("score").textRenderer.setText(this.c_score+this.score);
  }

  public static AfficheLife(){
    this.inter.getChild("life").textRenderer.setText(this.c_life+this.life);
  }
  
  public static AffichePower(){
    this.inter.getChild("power").textRenderer.setText(this.c_power+this.updatePoint);
  }
}