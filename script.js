'use strict';
$("#fade_in").animate({
    right: '0px'
}, 1000);

$('#bulbasaur_button').click(function(event) {

    console.log("CLICK");
});

$('#charmeleon_button').click(function(event) {
    // $('#charmeleon_button').popUp("HELLO"); 
    console.log($('#charmander_text').text());
    console.log($('#charmander_type').text());
    console.log($('#charmander_img').attr('src'));

    // $("#fade_in").animate({
    //     left: '200px',
        // height: '200px',
        // width: '200px',
        // right: '200px'
    // }, 1000);
});

$('#squirtle_button').click(function(event) {
    console.log('click');
    $('#squirtle_text').text('Wartortle');
    $('#squirtle_button').text('Wartortle');
    $('#squirtle_img').attr('src', 
    'https://vignette.wikia.nocookie.net/pokemon/images/0/0c/008Wartortle.png/revision/latest/scale-to-width-down/200?cb=20140328191553');
    $('#squirtle_evolve').text('Blastoise');


});

