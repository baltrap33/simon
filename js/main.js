$(document).ready(function(){
    var simonKeys = [];  
    function createKeys(){
       $(".button").each(function(){
            var buttonJquery = $(this);
            var key = new Key(buttonJquery);    
            simonKeys.push(key);       
       })
    }
    // Utiliser la classe Key pour créer les boutons du simon
    createKeys();
});
