

/*
 * Update view on hash change.
 *
$(window).bind('hashchange', function () {
    var pages = $('section');
    var hash = window.location.hash || '#dashboard';
    pages.hide();
    pages.filter(hash).fadeIn(400);
    $('.menu-item').removeClass('active');
    $('#mi-' + hash.slice(1)).addClass('active');
});


/*
 * Main menu item click handler.
 *
$('.menu-item').click(function() {
    window.location.hash = $(this).attr('id').slice(3);
});
*/