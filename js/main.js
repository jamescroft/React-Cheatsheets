

var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent ) {

   client.on( "copy", function (event) {
     var clipboard = event.clipboardData;
     var codeSnippet = document.getElementById("test-pre").innerHTML;
     clipboard.setData( "text/plain", codeSnippet );
     
   });

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Copied!";
    setTimeout(function(){ 
        event.target.style.backgroundColor = "#337ab7";
        event.target.textContent = "Copy";
    }, 2000);
  } );
} );
