const bgMusic = new Audio("mmm.mp3");
bgMusic.loop = true;
bgMusic.volume = 1;

const tapSound = new Audio("mu.mp3");
tapSound.volume = 1;
tapSound.preload = "auto";

// Browser allow kare to music start hoga
window.addEventListener("load", () => {
    bgMusic.play().catch(() => {});
});

function playVideo(){

    bgMusic.pause();
    bgMusic.currentTime = 0;

    tapSound.currentTime = 0;
    tapSound.play();

    document.getElementById("question").style.display = "none";
    document.getElementById("videoContainer").style.display = "block";

    const video = document.getElementById("myVideo");

    video.volume = 1;
    video.muted = false;

    tapSound.onended = function(){
        video.play();
    };

}
