$(document).ready(function () {
    var simonKeys = [];
    function createKeys() {
        $('.button').each(function () {
            var boutonJQ = $(this);
            var btn = new Key(boutonJQ);
            simonKeys.push(btn);
        });
    }
    // Utiliser la classe Key pour créer les boutons du simon
    createKeys();
    d = simonKeys[0];

    $('#startBtn').click(function () {
        var i = 0;
        for (i; i < simonKeys.length; i++) {
            var id = simonKeys[i].id;
            simonKeys[i].play();
        }
    })











});

