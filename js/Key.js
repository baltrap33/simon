class Key {
    // constructeur de la classe
    constructor(boutonJQ) {
        this.boutonJQ = boutonJQ;
        
        this.addListeners();
    }
    // permet d'obtenir l'id de l'élement HTML concerné
    get id() {
        var el = this.boutonJQ[0];
        return el.id;
    }
    
    // la touche doit jouer le son et s'éclairer
    // l'élément html <audio> peut jouer un son
    // var a = document.getELementById('#idBaliseAudio');
    // a.play();
    play() {
        var htmlElJQ = this.boutonJQ;
        var a = htmlElJQ.children().first();
        var audio = a[0];
        audio.play();
        htmlElJQ.addClass('lighted');

    }
    // quand le son est fini la touche s'éteinds
    stoped() {
        var htmlElJQ = this.boutonJQ;
        htmlElJQ.removeClass('lighted');
    }
    // on ajoute un écouteur du click
    addClickListener() {
        var instance = this;
        var htmlElJQ = this.boutonJQ
        htmlElJQ.click(function () {
            instance.play();
        });
    }
    // on ajoute un écouteur à l'élément <audio>
    // pour savoir quand il a fini de jouer afin d'éteindre la lumière
    addEndedListener() {
        var instance = this;
        var htmlElJQ = this.boutonJQ;
        var a = htmlElJQ.children().first();
        var audio = a[0];
        audio.onended = function() {
            instance.stoped();
        }
    }
    // on ajoute des écouteurs
    addListeners() {
        this.addClickListener();
        this.addEndedListener();
    }
}
