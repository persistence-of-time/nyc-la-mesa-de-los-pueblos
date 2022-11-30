

const video_frame = document.querySelector(".video-frame");
const watch = new Watch(video_frame, {
  threshold: 0.75,
});
let player;