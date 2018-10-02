$(document).ready(function () {
    var simonKeys = [];
    var tabOrdi = [];
    var tabJoueur = [];
    function createKeys() {
        $(".button").each(function () {
            var elementJquery = $(this);
            var key = new Key(elementJquery);
            simonKeys.push(key);
        });
    }

    // Utiliser la classe Key pour créer les boutons du simon
    createKeys();
    function eventUserTouch(data) {
        var touchEl = data.detail.id;
        console.log(data.detail.id);
        tabJoueur.push(touchEl);
        console.log(tabJoueur);
    }
    function createKeysListener() {

        var i;
        for (i = 0; i < simonKeys.length; i++) {
            var key = simonKeys[i];
            var jqEl = key.jqueryElement;
            jqEl.on('eventTouch', eventUserTouch);
        }
    }
    createKeysListener();

    $('#startBtn').click(function () {
        enregistreTabOrdi();
    });

    function enregistreTabOrdi() {
        var random = Math.random() * 4;
        var choix = Math.floor(random);
        var key = simonKeys[choix];
        tabOrdi.push(key);

        playMelodie();
    }
    function playMelodie() {
        var i;
        for (i = 0; i < tabOrdi.length; i++) {
            var key = tabOrdi[i];
            intervalMelody(key, i);

        };
        function intervalMelody(key, i) {
            setTimeout(function () {
                key.play();
                console.log(key.jqueryElement[0]);
            }, 800*i);
        };
    }

         
    

    // Les boutons ne "diffusent" pas le fait que quelqu'un ait pu cliquer dessus.
    // regarder la documentation
    // https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Events/Creating_and_triggering_events
    // il faut que ce fichier détecte les clics des touches


    // Quand on appuie sur startBtn
    // le jeu se lance.
    // décomposer sur papier les processus (minimum livrables) à mettre en place
    // commencer à developper vos idées. (une nouvelle branch est requis !)
});
