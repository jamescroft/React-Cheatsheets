

var clipboard = new ClipboardJS('.btn-clipboard');

$(function () {
    $(".rcs-clipboard").tooltip({
        placement: "top",
        title: "Copy to clipboard",
    });
})

clipboard.on('success', function(e) {
    console.log(e);
    e.clearSelection();
    $(".rcs-clipboard").attr('data-original-title', "Copied!").tooltip('show');
});

$(".rcs-clipboard").mouseout(function(){
    $(".rcs-clipboard").attr('data-original-title', "Copy to clipboard").tooltip('hide');
})

clipboard.on('error', function(e) {
    console.log(e);
});
