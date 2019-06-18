// Tooltips

$('.btn-clipboard').tooltip({
    trigger: 'hover',
    placement: 'top',
    title: 'Copy to clipboard',
    offset: '0, 10'
  });
  
  function setTooltip(message) {
    $(event.target).tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }
  
  function hideTooltip() {
    setTimeout(function() {
      $('.btn-clipboard').tooltip('hide')
      .attr('data-original-title', 'Copy to clipboard');
    }, 1000);
  }

  // Clipboard

  var clipboard = new ClipboardJS('.btn-clipboard');
  
  clipboard.on('success', function(e) {
    setTooltip('Copied!');
    hideTooltip();
    e.clearSelection();
  });
  
  clipboard.on('error', function(e) {
    setTooltip('Failed!');
    hideTooltip();
  });
  