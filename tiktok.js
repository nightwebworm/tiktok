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


var srcs = srcs_v.filter( video => video!=null).map(video => video.src)

// UNTILL HERE

// <span class="lazyload-wrapper"><div>


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



/*
var loop = setInterval(()=>{scroll()}, 1000);
let body = document.querySelector("body")
let h=0;
let h_b=-1;
function scroll() {
    h= body.clientHeight;
    if (h===h_b){
        clearInterval(loop);
    }
    window.scroll(0,body.clientHeight)
    h_b=h
    console.log("scroll..")
}*/



document.querySelector("#main > div.jsx-3348443870.main-body.page-with-header.middle.em-follow > div.jsx-2958430982.share-layout.compact.middle > div > main > div.tt-feed > div.jsx-1906445185.video-feed.compact > div:nth-child(1) > div > div > div > a > span")

// Not working

let bottom=false;
document.addEventListener('scroll', function(e) {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    // When the user is [modifier]px from the bottom, fire the event.
    let modifier = 200; 
    if(currentScroll + modifier > documentHeight) {
        console.log('You are at the bottom!')
        bottom=true;
        // check if it remains
    } else {
        console.log('You are not at the bottom!')
        bottom=false;
    }
})

let sum=1000;
window.scroll(0,sum);sum*=2;

// Open all the meals 
function myLoop() {         //  create a loop function
    return new Promise( (resolve)=>{
        setTimeout(()=> {   //  call a 3s setTimeout when the loop is called        
            if (!bottom){
                window.scroll(0,sum);sum*=2;
                myLoop().then( ()=>{
                    resolve()
                }  )
            } else {
                setTimeout( ()=>{
                    window.scroll(0,10+sum/2);sum*=2
                    setTimeout(()=>{
                        if (!bottom){
                            window.scroll(0,sum);sum*=2;
                            myLoop().then( ()=>{
                                resolve()
                            }  )
                        } else {
                            // you are indeed on the bottom!
                            resolve()
                        }
                    },500)
                } , 2000)
            }
        }, 1000)
    } )   
}

myLoop()