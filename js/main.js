$(document).ready(function () {
    var simonKeys = [], speed = 900, melody;

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
        console.log(key.id);
    }
    function createKeyClickListeners() {
        simonKeys.map(function (simonKey) {
            jqueryElement = simonKey.jqueryElement;
            jqueryElement.on('customClickEvent', userClickOnKey);
        });
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

    function createMelody(nbNotes) {
        melody = [];
        for (var i = 0; i < nbNotes; i++) {
            addMelodyKey();
        }
        displayMelody();
    }

    function displayMelody() {
        var str = '';
        for (var i = 0; i < melody.length; i++) {
            var key = melody[i];
            str += key.id + ' ';
        }
        console.log(str);
    }

    function playMelody() {
        var m = melody.length;
        var promises = [];
        for (var i = 0; i < m; i++) {
            var key = melody[i];
            promises.push(playNote(key, i));
        }
        return Promise.all(promises);
    }

    function playNote(key, i) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                key.play();
                resolve();
            }, speed * (i + 1));
        });
    }
    function setTourJoueur() {
        setTimeout(function () {
            console.log('tour du joueur');
            joueur();
        }, 500);
    }
    function joueur() {
        createKeyClickListeners();
    }
    $("#startBtn").click(function () {
        createMelody(10);
        playMelody()
            .then(function () {

                setTourJoueur();
                
            });
    });
});
