/* Translation */
const translations = ['ja', 'zh_CN'];

function translatePathRedirect(languageCode) {
    const path = window.location.pathname;
    let splitPath = path.split('/');
    if (splitPath[1] !== languageCode) {
        if (languageCode === 'en') {
            splitPath.splice(1, 1);
        } else if (translations.indexOf(splitPath[1]) > -1) {
            splitPath[1] = languageCode;
        } else if (translations.indexOf(languageCode) > -1) {
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
        if ($(this).val() !== 'translate') {
            translatePathRedirect($(this).val());
        }
        else {
            window.location.href = '/guidelines/translating-the-documentation.html';
        }
    });
}

/* Code tabs */
function addBlockCaptionInsideCodeExample() {
    $(".code-block-caption").each(function () {
        $(this).next().prepend(this);
    });
    $(".literal-block-wrapper").removeClass("container");
    $(".example-code").addClass("visible");
}

/* Links */
function addTargetBlankAttributeToExternalLinks() {
    $('a.external').attr("target", "_blank");
}

function highlightSidebarLinksOnScroll(){
    const sections = $('.content .section');
    $(window).scroll(function(){
        const currentScroll = $(this).scrollTop();
        let currentSection;
        sections.each(function(){
            let divPosition = $(this).offset().top;
            if(divPosition - 260 < currentScroll){
                currentSection = $(this);
            }
            if (currentSection){
                const id = currentSection.attr('id');
                $('.bs-sidenav.secondary a').removeClass('current');
                $('.bs-sidenav.secondary a[href="#'+id+'"]').addClass('current');
            }
        });
    });
}

$(document).ready(function () {
    addBlockCaptionInsideCodeExample();
    initLanguageSelector();
    addTargetBlankAttributeToExternalLinks();
    highlightSidebarLinksOnScroll();
});
