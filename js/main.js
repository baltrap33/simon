$(document).ready(function () {

    function createKeys() {
        var array = []
        $(".button").each(function () {
            var elementJquery = $(this);
            var key = new Key(elementJquery);
            array.push(key);
        });
        return array;
    }

    function createKeyClickListeners() {
        simonKeys.map(function (simonKey) {
            jqueryElement = simonKey.jqueryElement;
            jqueryElement.on('customClickEvent', userClickOnKey);
        });
    }

    var simonKeys = createKeys(),
        speed,
        melody,
        count,
        userMelody,
        userTurn;

    createKeyClickListeners();

    function compareMelodies() {
        for (var i = 0; i < userMelody.length; i++) {
            var userKey = userMelody[i], melodyKey = melody[i];
            if (userKey.id === melodyKey.id) {
                if (i === melody.length - 1) {
                    var latence = speed < 500 ? 500 : speed;
                    setTimeout(function () {

                        launchComputerTurn();
                    }, latence);
                }
                continue;
            }

            playErrors();
            break;

        }
    }

    function playErrors() {
        userTurn = false;
        displaySimon('Perdu !');
        blinkSimon(600, 1200, 1700);
    }
    function blinkSimon() {
        for (var i = 0; i < arguments.length; i++) {
            (function (last, delay) {
                setTimeout(function () {
                    simonKeys.map(function (simonKey) {
                        simonKey.muted = true;
                        simonKey.play();
                        if (last) {
                            simonKey.muted = false;
                        }
                    });
                }, delay);
            })(i === (arguments.length - 1), arguments[i]);
        }
    }

    function userClickOnKey(event) {
        var key = event.detail;
        if (userTurn) {
            userMelody.push(key);
            displaySimon('?');
            compareMelodies();
        }
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

    function displayMelody() {
        var str = '';
        for (var i = 0; i < melody.length; i++) {
            var key = melody[i];
            str += key.id + ' ';
        }
        console.log(str);
    }

    function playMelody() {
        var m = melody.length, promises = [];
        for (var i = 0; i < m; i++) {
            var key = melody[i],
                promise = playNote(key, i);
            promises.push(promise);
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

    function launchUserTurn() {
        userTurn = true;
        userMelody = [];
        setTimeout(function () {
            displaySimon('à vous !');
        }, 800);
    }

    function increaseDifficulty() {
        speed = speed < 450 ? 450 : (speed-25);
    }

    function launchComputerTurn() {
        userTurn = false;
        addMelodyKey();
        displayMelody();
        count = melody.length;
        displaySimon(count);
        playMelody().then(function () {
            increaseDifficulty();
            launchUserTurn();
        });
    }

    function initVars() {
        melody = [];
        speed = 800;
        count = 0;
        displaySimon('');
    }

    function startGame() {
        initVars();
        launchComputerTurn();
    }

    function displaySimon(str) {
        $("#display").html(str);
    }

    $("#startBtn").click(function () {
        startGame();
    });
});
