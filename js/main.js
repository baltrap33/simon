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
    $('#startBtn').click(function(){
        var i;
        for (i = 0; i<simonKeys.length; i++){
            console.log(simonKeys[i].id);
            simonKeys[i].play();
            
        }

    });
});
