const translations = ['ja', 'zh_CN'];

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
        if($(this).val() !== 'translate'){
            translatePathRedirect($(this).val());
        }
        else{
            window.location.href = 'https://www.transifex.com/nemtech/nem2docs/';
        }
    });
}

function setPreferredCodeTab(){
    try{
        let urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('code')) {
            localStorage.setItem('preferredCodeTab', urlParams.get('code'));
        }
    } catch(e){
        console.log("Error:" + e);
    }
}

function clickPreferredCodeTab(){
    const code = localStorage.getItem('preferredCodeTab');
    if (code !== null){
        if (code === 'typescript'){
            $("[data-tab=tab-0-0]").click();
        } else if (code === 'javascript'){
            $("[data-tab=tab-0-1]").click();
        }
        $(".highlight-" + code).click();
    }
}

function addBlockCaptionInsideCodeExample(){
    $(".code-block-caption").each(function() {
        $(this).next().prepend(this);
    });
    $(".literal-block-wrapper").removeClass("container");
}

$( document ).ready(function() {
    addBlockCaptionInsideCodeExample();
    initLanguageSelector();
    setPreferredCodeTab();
    $('a.external').attr("target","_blank");
});

$(window).on('load', function(){
    clickPreferredCodeTab();
});
