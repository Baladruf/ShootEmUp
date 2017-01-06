class PlayerInfoBehavior {
  static life : number;
  static speed : number;
  static nvArme : number;
  static damage : number;
  static cd : number;
  static score : number;
  static vaisseau : Sup.Actor;
  static updatePoint : number;
  static nvSpeed : number;
  static nvCd : number;

  private static c_score = "score : ";
  private static c_life = "life : ";
  private static c_power = "power : ";
  private static c_damage = "damage : ";
  private static c_speed = "speed : ";
  private static c_nbTir = "shoot : ";
  private static c_cooldown = "cooldown : ";


  static inter : Sup.Actor;
  
  public static PointEnnemiSimple(){
    this.score += 100;
  }

  public static PointS1(){
    this.score += 200;
  }

  public static PointS2(){
    this.score += 500;
  }

  public static PointSL(){
    this.score += 1000;
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

  public static AfficheDamage(){
    this.inter.getChild("damage").textRenderer.setText(this.c_damage+this.damage);
  }

  public static AfficheSpeed(){
    this.inter.getChild("speed").textRenderer.setText(this.c_speed+this.nvSpeed);
  }

  public static AfficheNbTir(){
    this.inter.getChild("nbTir").textRenderer.setText(this.c_nbTir+this.nvArme);
  }

  public static AfficheCooldown(){
    this.inter.getChild("cooldown").textRenderer.setText(this.c_cooldown+this.nvCd);
  }
}