class ListTirBehavior {
  static listTir : Sup.Actor[];
  public static getTir(num : number){
    return this.listTir[num];
  }
  public static Length(){
    return this.listTir.length;
  }
  public static Add(act : Sup.Actor){
    this.listTir.push(act);
  }
  public static Remove(num : number){
    
  }
}

