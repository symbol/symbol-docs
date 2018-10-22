function homePageFullWidth(){
    const jumbotron = $('.jumbotron');
    jumbotron.closest('.container').css({"width": "100%", "padding": "0px"});
    jumbotron.closest('.content').css({"padding-bottom": "0px"});
}

function addSidebarClickHandler(){
    $('#sidebar .caption').click(function() {
        const nextUl = $(this).next('ul');
        if (nextUl.hasClass("show")) nextUl.removeClass("show");
        else nextUl.addClass("show");
    });
}

function addBlockCaptionInsideCodeExample(){
    $(".code-block-caption").each(function() {
        $(this).next().prepend(this);
    });
    $(".literal-block-wrapper").removeClass("container");
}


function addHoverToSidebar(){
    $( "#sidebar > ul.current").prev().addClass("sidebar-current-ul");
}

$( document ).ready(function() {
    homePageFullWidth();
    addSidebarClickHandler();
    addBlockCaptionInsideCodeExample();
    addHoverToSidebar();
});

