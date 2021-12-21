// scroll to end
let options = {
    top: 100,
    left: 0,
    behavior: 'smooth'
  }

  let h = document.querySelector("html") // scroll top char
  h.scrollHeight; // The scroll height
  h.scrollTop; // scrolled from top
  h.scroll(0,h.scrollHeight)

  window.scroll(options); // scroll to specific location // like scrollTo
  window.scrollBy(options); // scroll so much more
  window.scrollTop()

  let h = document.querySelector("html") // scroll top char


  // if less than 200, then continue


  // find if has been more or less videos

  // check if at end, then scroll
  if (h.scrollTop < h.scrollHeight - 200){
    h.scroll({
            top: h.scrollHeight,
            left: 0,
            behavior: 'smooth'
          })
    console.log("Still going")
  } else {
      console.log("At the bottom")
  }

  let d = document.querySelectorAll(".video-feed-item");

  // Step
  let h = document.querySelector("html") // scroll top char
  let videos = -1;
  function step(){
    let v = document.querySelectorAll(".video-feed-item");
    // videos = v.length;
    // if 
  }