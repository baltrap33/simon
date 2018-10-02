class Key {
    // constructeur de la classe
    constructor(jqElement) {
        this.jqueryElement = jqElement;
        this.isMuted = this.analyseKey();
        this.addListeners();
    }

    // permet d'obtenir l'id de l'élement HTML concerné
    get id() {
        var instance = this,
            jqEl = instance.jqueryElement,
            el = jqEl[0];

        return el.id;
    }
    // permet d'obtenir l'état 'muet' d'une touche
    get muted() {
        return this.isMuted;
    }
    // permet de rendre 'muet' ou non une touche
    set muted(mute) {
        this.isMuted = mute;
    }

    // la touche doit jouer le son et s'éclairer
    // si elle n'est pas dans l'état 'muet'
    // l'élément html <audio> peut jouer un son
    // var a = document.getELementById('#idBaliseAudio');
    // a.play();
    play() {

        var instance = this,
            jqEl = instance.jqueryElement,
            audioJqueryEl = jqEl.find('audio'),
            audioEl = audioJqueryEl[0];
        var event = new CustomEvent('diffuse', {
            'detail': this
        });
        if (instance.isMuted) {
            return;
        }
        jqEl.addClass('lighted');
        audioEl.play();
        jqEl[0].dispatchEvent(event);

    }
    // quand le son de la touche est fini la touche s'éteinds
    stoped() {
        var instance = this,
            jqEl = instance.jqueryElement;

        jqEl.removeClass('lighted');
    }
    // on ajoute un écouteur du click
    addClickListener() {
        var instance = this,
            jqEl = instance.jqueryElement;

        jqEl.click(function () {
            instance.play();
        });
    }
    // on ajoute un écouteur à l'élément <audio>
    // pour savoir quand il a fini de jouer afin d'éteindre la lumière
    addEndedListener() {
        var instance = this,
            jqEl = instance.jqueryElement,
            audioJqueryEl = jqEl.find('audio');

        audioJqueryEl.on('ended', function () {
            instance.stoped();
        });
    }
    // on analyse l'element html pour savoir si la touche est 'muette'
    analyseKey() {
        var instance = this,
            jqEl = instance.jqueryElement;
        var muted = jqEl.attr("muted");

        return muted && muted == "true";
    }
    // on ajoute des écouteurs
    addListeners() {
        this.addClickListener();
        this.addEndedListener();
    }
}
