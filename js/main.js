$(document).ready(function () {
    var simonKeys = [];
    function createKeys() {
        $(".button").each(function () {
            var simonKey = new Key($(this));
            simonKeys.push(simonKey);
        });
        $("#startBtn").click(function () {
            var i = 0;
            simonKeys;
            for (i; simonKeys.length > i; i++) {
                console.log(simonKeys[i].id);
                simonKeys[i].play();
                if (i == 0 || i == 1){

                }
            }
            
        });
    }
    // Utiliser la classe Key pour créer les boutons du simon
    createKeys();
});
