$(document).ready(function(){
    var simonKeys = [];  
    function createKeys(){
        $(".button").each(function(){
            var elementJquery = $(this);
            var key = new Key(elementJquery);
            simonKeys.push(key);
        });
    }
    // Utiliser la classe Key pour créer les boutons du simon
    createKeys();
});
