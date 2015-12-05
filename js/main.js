

var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent ) {
   alert( "ZeroClipboard SWF is ready!" );

   client.on( "copy", function (event) {
     var clipboard = event.clipboardData;
     clipboard.setData( "text/plain", "Copy me!" );
     clipboard.setData( "text/html", "<b>Copy me!</b>" );
     clipboard.setData( "application/rtf", "{\\rtf1\\ansi\n{\\b Copy me!}}" );
   });

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    event.target.style.display = "none";
    alert("Copied text to clipboard: " + event.data["text/plain"] );
  } );
} );
