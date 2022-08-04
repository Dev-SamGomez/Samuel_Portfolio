jQuery('document').ready(function($) {
    var menuBtn = $('.burguer-menu'),
        menu = $('.navigation ul');

    menuBtn.click(function() {

        if (menu.hasClass('show')) {
            menu.removeClass('show');
            console.log('Remueve clase');
        } else {
            menu.addClass('show');
            console.log('Agrega clase');
        }
    });
});