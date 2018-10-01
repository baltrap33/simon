class Key {
    // constructeur de la classe
    constructor(buttonJquery) {
        this.buttonJquery = buttonJquery;
        this.mute = false;
        this.addListeners();
    }
    // permet d'obtenir l'id de l'élement HTML concerné
    get id() {
        return this.buttonJquery[0].id;
    };

    get muted(){
        return this.mute;
    }
    // la touche doit jouer le son et s'éclairer
    // l'élément html <audio> peut jouer un son
    // var a = document.getELementById('#idBaliseAudio');
    // a.play();
    play() {
        var htmlEl = this.buttonJquery;
        var son = htmlEl.children();
        var audio = son[0];
        if (!this.mute){
            audio.play();
            console.log('play');
        }      
        htmlEl.addClass("lighted");
    }
    // quand le son est fini la touche s'éteinds
    stoped() {
        this.buttonJquery.removeClass("lighted");
    }
    // on ajoute un écouteur du click
    addClickListener() {
        var instance = this;
        this.buttonJquery.click(function () {
            instance.play();
        });
    }
    // on ajoute un écouteur à l'élément <audio>
    // pour savoir quand il a fini de jouer afin d'éteindre la lumière
    addEndedListener() {
        var htmlEl = this.buttonJquery;
        var instance = this;
        var son = htmlEl.children();
        son.on('ended', function () {
            instance.stoped();
        });
    }
    // on ajoute des écouteurs
    addListeners() {
        this.addClickListener();
        this.addEndedListener();
    }
}
