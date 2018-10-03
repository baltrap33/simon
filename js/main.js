$(document).ready(function () {
    var simonKeys = [], speed = 900, melody = [], tabJoueur = [];
    var userTurn = false;

    function createKeys() {
        $(".button").each(function () {
            var elementJquery = $(this);
            var key = new Key(elementJquery);
            simonKeys.push(key);
        });
    }
    createKeys();

    function userClickOnKey(event) {
        var key = event.detail;
        if(userTurn){
            rempliTabJoueur(key);
            compareTabs();
        }
        

    }
    function createKeyClickListeners() {
        simonKeys.map(function (simonKey) {
            jqueryElement = simonKey.jqueryElement;
            jqueryElement.on('customClickEvent', userClickOnKey);
        });
    }
    createKeyClickListeners();

    function rempliTabJoueur(key){
        tabJoueur.push(key);
    }

    function getKeyRandomly() {
        var m = simonKeys.length;
        var f = Math.random() * m;
        var index = Math.floor(f);
        return simonKeys[index];
    }


    function addMelodyKey() {
        var k = getKeyRandomly();
        melody.push(k);
    }
    function compareTabs() {
        //userTab && melody
        //
        for(var i = 0; i < tabJoueur.length; i++){
            var userKey = tabJoueur[i];
            var melodyKey = melody[i];
            if(melodyKey && userKey.id === melodyKey.id){
                if( i === (melody.length - 1)){
                    setTimeout(function(){
                        $('#indication').text('Tour gagné');
                        console.log('tour gagné');
                        $('#compteur').text(melody.length);
                        computerTurn();
                    }, 900);
                    
                }
            }else{
                $('#indication').text('PERDU');
                console.log("error");
            }
        }


    }
    /*function creeEcouteurMelody(key, i, m){
        var dernierSon = melody.length;
        dernierSon.on('tourJoueur', function(){
            console.log('toto');
        });
    }*/
    function playMelody() {
        var m = melody.length;
        for (var i = 0; i < m; i++) {
            var key = melody[i];
            playNote(key, i, m);

        }
        //creeEcouteurMelody(key, i, m);
    }



    function playNote(key, i, m) {
        setTimeout(function () {
            key.play();
            if (i === (m-1)) {
                setTimeout(function () {
                    $('#indication').text('À toi')
                    console.log('fin de la mélodie');
                    playJoueur();
                }, 800);
            }
        }, speed * i);




    }

    function computerTurn(){
        
        userTurn = false;
        addMelodyKey();
        playMelody();
        
    }

    $("#startBtn").click(function () {
        melody = [];
        computerTurn();
        
    });
    
    function playJoueur() {
        userTurn = true;
        console.log('à toi de jouer');
        tabJoueur = [];
    }
    
});
