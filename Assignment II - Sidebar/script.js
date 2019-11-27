$(document).on('click', '.sidebar-mini .mini-item', function(){
    var allContainers = $('.sidebar-mini  .mini-item-container');
    allContainers.removeClass('active');
    $(this).parent().addClass('active');
    // var that = this;
    // allContainers.each(function(){
    //     if($(this).has(that).length) {
    //         $(this).addClass('active');
    //     }
    // });
});