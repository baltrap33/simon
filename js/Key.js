class Key {
    // constructeur de la classe
    constructor(buttonJquery) {
        this.btnJquery = buttonJquery;
        this.addListeners();
    }
    // permet d'obtenir l'id de l'élement HTML concerné
    get id() {
        return this.btnJquery[0].id;
    }
    // la touche doit jouer le son et s'éclairer
    // l'élément html <audio> peut jouer un son
    // var a = document.getELementById('#idBaliseAudio');
    // a.play();
    play() {
            var instance = this;
            instance.btnJquery.addClass("lighted");
            var audioJq = instance.btnJquery.find("audio");
            var audio = audioJq[0];
            audio.play();
    }
    // quand le son est fini la touche s'éteinds
    stoped() {
        this.btnJquery.removeClass("lighted");
    }
    // on ajoute un écouteur du click
    addClickListener() {
        var instance = this;
        instance.btnJquery.click(function(){
            instance.play();
        });
    }
    // on ajoute un écouteur à l'élément <audio>
    // pour savoir quand il a fini de jouer afin d'éteindre la lumière
    addEndedListener() {
        var audioJq = this.btnJquery.find("audio");
        var instance = this;
        audioJq.on('ended', function(){
            instance.stoped();
        })
    }
    // on ajoute des écouteurs
    addListeners() {
        this.addClickListener();
        this.addEndedListener();
    }
}
