const translations = ['ja'];

function translatePathRedirect(languageCode) {
    const path = window.location.pathname;
    let splitPath = path.split('/');
    if (splitPath[1] !== languageCode){
        if (languageCode === 'en') {
            splitPath.splice(1, 1);
        } else if (translations.indexOf(splitPath[1]) > -1) {
            splitPath[1] = languageCode;
        } else if(translations.indexOf(languageCode) > -1){
            splitPath.splice(1, 0, languageCode);
        }
        window.location.href = splitPath.join('/');
    }
}

function initLanguageSelector() {
    const languageSelector = $('#language select');
    const path = window.location.pathname;
    const languageCode = path.split('/')[1];
    if (translations.indexOf(languageCode) > -1) {
        languageSelector.val(languageCode);
    } else {
        languageSelector.val('en');
    }
    languageSelector.change(function () {
        translatePathRedirect($(this).val());
    });
}

function homePageFullWidth(){
    const jumbotron = $('.jumbotron');
    jumbotron.closest('.container').css({"width": "100%", "padding": "0px"});
    jumbotron.closest('.content').css({"padding-bottom": "0px"});
}

function addSidebarClickHandler(){
    $('#sidebar .caption').click(function() {
        const nextUl = $(this).next('ul');
        if (nextUl.hasClass("show")) {
            nextUl.removeClass("show");
        } else {
            nextUl.addClass("show");
        }
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
    initLanguageSelector();
    addHoverToSidebar();
});

