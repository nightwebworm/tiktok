function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }

srcs.forEach( (src,i)=>{
    //var myVideo = document.createElement('video');
    fetch(src).then(function(response) {
      console.log(response.type); // returns basic by default
      response.blob().then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        downloadURI(objectURL,"download")
        
        /*document.querySelector("body").appendChild(myVideo)
    
        let source = document.createElement("source")
        myVideo.appendChild(source)
      
        myVideo.setAttribute("controls",true);
        source.src = objectURL;
        source.type="video/mp4"*/
      });
    });
    
} )



