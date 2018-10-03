$(document).ready(function () {
    var simonKeys = [];
    
    function createKeys() {
        $(".button").each(function () {
            var elementJquery = $(this);
            var key = new Key(elementJquery);
            simonKeys.push(key);
        });
    }
    createKeys();

    function userClickOnKey (event){
        var key = event.detail;
        console.log(key.id);
    }
    function createKeyClickListeners() {
        simonKeys.map(function(simonKey){
            jqueryElement = simonKey.jqueryElement;
            jqueryElement.on('customClickEvent', userClickOnKey);
        });
    }
    createKeyClickListeners();

});
