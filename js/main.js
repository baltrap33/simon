$(document).ready(function(){
    var simonKeys = [];  
    function createKeys(){
        $('.button').each(function(){
            var boutonJQ = $(this);
            var btn = new Key(boutonJQ);
            simonKeys.push(btn);
        });
    }
    // Utiliser la classe Key pour créer les boutons du simon
    createKeys();
    console.log(simonKeys);
    d = simonKeys[0];
});
