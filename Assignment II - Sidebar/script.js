$(document).on('click', '.sidebar-mini .mini-item', function(){
    var allContainers = $('.sidebar-mini  .mini-item-container');
    allContainers.removeClass('active');
    $(this).parent().addClass('active');
});


$(document).on('click', '.sidebar .menu-item', function(){
    var allContainers = $('.sidebar  .menu-item');
    allContainers.removeClass('active');
    $(this).addClass('active');
});