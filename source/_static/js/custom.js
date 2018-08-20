function homePageFullWidth(){
    $('.jumbotron').closest('.container').css({"width": "100%", "padding": "0px"});
    $('.jumbotron').closest('.content').css({"padding-bottom": "0px"});
}

function addSidebarClickHandler(){
    $('#sidebar .caption').click(function() {
        const nextUl = $(this).next('ul');
        if (nextUl.hasClass("show")) nextUl.removeClass("show");
        else nextUl.addClass("show");
    });
}

$( document ).ready(function() {
    homePageFullWidth();
    addSidebarClickHandler();
});


