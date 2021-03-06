class InitialisationBehavior extends Sup.Behavior {
  awake() {
    //Sup.appendScene("Niveau Game/Niveau 1")
    TabVaisseauxBehavior.vaisseauxEnnemis = [];
    TabVaisseauxBehavior.vaisseauxAllies = [];
    let tabTempEnn = Sup.getActor("ListeEnnemis").getChildren();
    for(let i = 0; i < tabTempEnn.length; i++){
      TabVaisseauxBehavior.vaisseauxEnnemis.push(tabTempEnn[i]);
    }
    TabVaisseauxBehavior.vaisseauxAllies.push(Sup.getActor("Player"));
  }
}
Sup.registerBehavior(InitialisationBehavior);
