$(document).ready(function() {
    $('.portfolio-close').on('click', function() {
        $( '.portfolio-iframe' ).attr( 'src', function ( i, val ) { return val; });
    });

    $('.snake-open').on('click', function() {
        $( '.snake-iframe' ).attr( 'src', function ( i, val ) { return val; });
    });
});