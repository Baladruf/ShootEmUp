class BtMenuBehavior extends Sup.Behavior {
  awake() {
    this.actor.fMouseInput.emitter.on("leftClickReleased", this.onClick.bind(this));
  }
  
  onClick(){
    if(this.actor.getName() === "Bt_solo"){
      
    }
    else if(this.actor.getName() === "Bt_deuxJ"){
       
       }else if(this.actor.getName() === "Bt_highScore"){
                
                }
  }
}
Sup.registerBehavior(BtMenuBehavior);
