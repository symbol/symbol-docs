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

const translations = ['ja'];


function translatePathRedirect(languageCode) {
    const path = window.location.pathname;
    let splitPath = path.split('/');
    if (languageCode === 'en') {
        splitPath.shift();
        splitPath.shift();
    }
    else if(splitPath[1] in translations) {
        splitPath[1] = languageCode;
    }
    else{
        splitPath.splice(1, 0, languageCode);
    }
    window.location.href = splitPath.join('/');
}

function initLanguageSelector(){
    const languageSelector = $('#language select');
    const path = window.location.pathname;
    const languageCode = path.split('/')[1];
    if (languageCode in translations) {
         languageSelector.val( languageCode );
    }
    else languageSelector.val( 'en' );

    languageSelector.change(function () {
        translatePathRedirect($(this).val());
    });
}

$( document ).ready(function() {
    homePageFullWidth();
    addSidebarClickHandler();
    initLanguageSelector();
});


