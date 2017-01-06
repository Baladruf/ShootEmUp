class InitialisationBehavior extends Sup.Behavior {
  awake() {
    TabVaisseauxBehavior.vaisseauxEnnemis = [];
    //TabVaisseauxBehavior.vaisseauxAllies = [];
    let tabTempEnn = Sup.getActor("ListeEnnemis").getChildren();
    for(let i = 0; i < tabTempEnn.length; i++){
      TabVaisseauxBehavior.vaisseauxEnnemis.push(tabTempEnn[i]);
    }
    //TabVaisseauxBehavior.vaisseauxAllies.push(Sup.getActor("Player"));
    PlayerInfoBehavior.vaisseau = Sup.getActor("Player");
    //PlayerInfo2Behavior.solo = true;
  }
  
  start(){
    if(PlayerInfo2Behavior.solo){
      PlayerInfoBehavior.inter = Sup.appendScene("Prefab/interface")[0];
    }else{
      PlayerInfo2Behavior.vaisseau = Sup.getActor("Player2");
      let interfa = Sup.appendScene("Prefab/interface2J")[0];
      PlayerInfoBehavior.inter = interfa.getChild("J1");
      PlayerInfo2Behavior.inter = interfa.getChild("J2");
    }
  }
  
}
Sup.registerBehavior(InitialisationBehavior);
