

var clipboard = new ClipboardJS('.btn-clipboard');

$(function () {
    $(".rcs-clipboard").tooltip({
        placement: "top",
        title: "Copy to clipboard"
    });
})

clipboard.on('success', function(e) {
    console.log(e);
    e.clearSelection();
    $('.rcs-clipboard').tooltip('dispose').tooltip({title: 'Copied!'}).tooltip('show');
});


clipboard.on('error', function(e) {
    console.log(e);
});
