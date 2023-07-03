{
  // this code is for video
  const video = document.getElementById("myVideo");

  video.addEventListener("ended", function () {
    video.currentTime = 0; // Reset the current time to the beginning of the video
    video.play(); // Start playing the video again
  });
}

{
  // this code is for humbugger toggle.
  const hamburger = document.querySelector(".humbugger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
}
