function playVideo(){

document.getElementById("question").style.display="none";
document.getElementById("videoContainer").style.display="block";

const video=document.getElementById("myVideo");

video.muted = false;
video.volume = 1;

video.play();

}
