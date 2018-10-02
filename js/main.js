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

    // Les boutons ne "diffusent" pas le fait que quelqu'un ait pu cliquer dessus.
    // regarder la documentation
    // https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Events/Creating_and_triggering_events
    // il faut que ce fichier détecte les clics des touches

    function createListenersKeys() {
        var i = 0;

        for (i; i < simonKeys.length; i++) {
            var key = simonKeys[i];
            var jEl = key.jqueryElement;
            jEl.on('diffuse', function (e) {
                console.log(e.detail.id);
            });
        };
    };

    createListenersKeys();

    // Quand on appuie sur startBtn
    // le jeu se lance.
    // décomposer sur papier les processus (minimum livrables) à mettre en place
    // commencer à developper vos idées. (une nouvelle branch est requis !)
    var tabKey = [];
    function randomCases() {
        var randomKey = simonKeys[Math.floor(Math.random() * 4)];
        tabKey.push(randomKey);
        console.log(tabKey);
    };

    function playNote(key,i){
        setTimeout(function(){
            key.play();
        },1000*i)
    };

    function interval() {
        randomCases();
        var i;
        for (i = 0; i < tabKey.length; i++) {
           playNote(tabKey[i],i);
        };
    };

    $("#startBtn").click(function () {
        interval();
    });
});
