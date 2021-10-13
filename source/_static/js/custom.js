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
    $('a.external').attr("rel", "noopener nofererrer");
    $('#sidebar a.external').attr("target", "_self");

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
    addTargetBlankAttributeToExternalLinks();
    highlightSidebarLinksOnScroll();
});
