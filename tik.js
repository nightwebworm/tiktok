// First, load all the videos on the page

let body = document.querySelector("body")
let h=0;
let h_b=-1;
function scroller() {
    h= body.clientHeight;
    if (h===h_b){
        clearInterval(loop);
    }
    window.scroll(0,body.clientHeight)
    h_b=h
  console.log("scroll: ", body.clientHeight)
}
var loop= setInterval(scroller, 3000);

// gather the srcs


// Simulate the mouse hover
var video_cards = document.querySelectorAll(".video-feed-item span.lazyload-wrapper")

var event = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
});

var srcs_v = []
video_cards.forEach( (element,i)=>{
    element.addEventListener('mouseover', function() {
        console.log('Event triggered');
      });
      
    element.dispatchEvent(event);

    let video = element.querySelector("video");
    srcs_v.push(video)
} )

// Scrap the srss

