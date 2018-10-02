$(document).ready(function () {
    var simonKeys = [];
    function createKeys() {
        $(".button").each(function () {
            var elementJquery = $(this);
            var key = new Key(elementJquery);
            simonKeys.push(key);
        });
    }

    // Utiliser la classe Key pour créer les boutons du simon
    createKeys();


    function createKeysListeners() {
        
        var i;
        for (i = 0; simonKeys.length > i; i++) {
            var tab = simonKeys[i];
            var el = tab.jqueryElement;
            el.on('touche', function (ev) {
                console.log(ev.detail.id);
            });
        };

    }


    // Les boutons ne "diffusent" pas le fait que quelqu'un ait pu cliquer dessus.
    // regarder la documentation
    // https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Events/Creating_and_triggering_events
    // il faut que ce fichier détecte les clics des touches*
    createKeysListeners();






    //});



    // Quand on appuie sur startBtn
    // le jeu se lance.
    // décomposer sur papier les processus (minimum livrables) à mettre en place
    // commencer à developper vos idées. (une nouvelle branch est requis !)
});
