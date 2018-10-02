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


    simonKeys.map(function (Key) {
        var dJQ = Key.jqueryElement;
        El = dJQ[0];
        El.addEventListener('clickTouche', function (data) {
            var dJQ = data.detail;
            console.log(dJQ.id);
        });
    });
    var melOrdi = [];
    var melJ = [];

    $('#startBtn').click(function () {
        jouer();
    });

    function jouer() {
        choixOrdi();
        reproduitOrdi();
    };
    
    function choixOrdi() {
        var cetteKey = choisirAuto();
        melOrdi.push(cetteKey)
        console.log(melOrdi);
        playTab();
        
        
    }
    function playTab() {
        for(i=0; i<melOrdi.length; i++){
            lala(melOrdi[i], i);
        }
    }
    function lala(Key, i) {
        setTimeout(function() {
            Key.play();
        }, 1000*i);
    }
    function choisirAuto (){
		var c = Math.random()*4;
		var i = Math.floor(c);
        //console.log(simonKeys[i]);
        return simonKeys[i];
    }

    function reproduitOrdi() {
        // click sur Key click(function(){
        //      for(i=0 i<melOrdi.length i++) {
        //    compare(melJ[i] ===  melOrdi)
        //  }
        //      
        // })
        // 
    }

   /* function compare() {
        if() {
            //Bravo!!!!!
            jouer();
        }else{
            //Perdu!!!!!
        }
    }*/

    


    // Quand on appuie sur startBtn
    // le jeu se lance.
    // décomposer sur papier les processus (minimum livrables) à mettre en place
    // commencer à developper vos idées. (une nouvelle branch est requis !)
});
