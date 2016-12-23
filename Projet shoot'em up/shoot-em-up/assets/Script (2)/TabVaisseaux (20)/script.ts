class TabVaisseauxBehavior {
  public static vaisseauxEnnemis : Sup.Actor[];
  static AddEnnemis(p_body){
    this.vaisseauxEnnemis.push(p_body);
  }
  static RemoveEnnemis(p_body){
    let i : number;
    for(i = 0; i < this.vaisseauxEnnemis.length; i++){
      if(this.vaisseauxEnnemis[i] === p_body){
        this.vaisseauxEnnemis.splice(i, 1);
        return;
      }
    }
  }
  static GetEnnemis(){
    return this.vaisseauxEnnemis;
  }


  public static vaisseauxAllies : Sup.Actor[];
  static AddAllies(p_body){
    this.vaisseauxAllies.push(p_body);
  }
  static RemoveAllies(p_body){
    let i : number;
    for(i = 0; i < this.vaisseauxAllies.length; i++){
      if(this.vaisseauxAllies[i] === p_body){
        this.vaisseauxAllies.splice(i, 1);
        return;
      }
    }
  }
  static GetAllies(){
    return this.vaisseauxAllies;
  }
}

