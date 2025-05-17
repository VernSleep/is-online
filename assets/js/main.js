(function($) {

    $(function() {

        var $window = $(window),
            $body = $('body'),
            $banner = $('#banner');

        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        $(".bg-img").each(function() {
            var post = $(this),
                bg = post.data('bg');
            post.css('background-image', 'url(images/' + bg + ')');
        });

        $(".post").each(function() {
            var p = $(this),
                i = p.find('.inner'),
                m = p.find('.more');
            m.addClass('scrolly');
            p.scrollex({
                top: '40vh',
                bottom: '40vh',
                terminate: function() { m.removeClass('current'); i.removeClass('current'); },
                enter: function() { m.addClass('current'); i.addClass('current'); },
                leave: function() { m.removeClass('current'); i.removeClass('current'); }
            });
        });

        $('.scrolly').scrolly();

    });

})(jQuery);

function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

window.onload = function() {
    document.getElementById("imageModal").style.display = "none";
};

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}