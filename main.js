

const video_frame = document.querySelector(".video-frame");
const watch = new Watch(video_frame, {
  threshold: 0.75,
});
let player;

let observer = new IntersectionObserver((entries, observer)=> {
  entries.forEach((entry) => {
    if (window.matchMedia("(preferes-reduced-motion: reduce)").matches) {

      vid_trig.currentTime = 2;
    } else {
      if (entry.isIntersecting) {
        vid_trig.play();
      }
    }
  });
});

observer.observe(vid_trig);