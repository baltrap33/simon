class Key {
    // constructeur de la classe
    constructor(simonKey) {
        this.simonKey = simonKey;
        this.mute = false;
        this.addListeners();
    }
    // permet d'obtenir l'id de l'élement HTML concerné
    get id() {
        return this.simonKey[0].id;

    }
    get muted(){
    
    }
    set muted(){

    }
    // la touche doit jouer le son et s'éclairer
    // l'élément html <audio> peut jouer un son
    // var a = document.getELementById('#idBaliseAudio');
    // a.play();
    play() {
        this.simonKey.addClass("lighted");
        var sourceEl = $(".source", this.simonKey)[0];
        sourceEl.play();
    }

    // quand le son est fini la touche s'éteinds
    stoped(sourceEl) {

        this.simonKey.removeClass("lighted");


    }
    // on ajoute un écouteur du click
    addClickListener() {
        var instance = this;
        this.simonKey.click(function () {
            instance.play();
        });
    }
    // on ajoute un écouteur à l'élément <audio>
    // pour savoir quand il a fini de jouer afin d'éteindre la lumière
    addEndedListener() {
        var sourceEl = $(".source", this.simonKey);
        var instance = this;
        sourceEl.on('ended', function () {
            instance.stoped();
        });
    }
    // on ajoute des écouteurs
    addListeners() {
        this.addClickListener();
        this.addEndedListener();
    }
}
