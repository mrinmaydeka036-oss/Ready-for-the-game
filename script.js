const bgMusic = new Audio("mmm.mp3");
bgMusic.loop = true;
bgMusic.volume = 1;

const tapSound = new Audio("mu.mp4");
tapSound.volume = 1;
tapSound.preload = "auto";

// Browser allow kare to music start hoga
window.addEventListener("load", () => {
    bgMusic.play().catch(() => {});
});

function playVideo() {

    const video = document.getElementById("myVideo");

    // Stop background music
    bgMusic.pause();
    bgMusic.currentTime = 0;

    // Hide question
    document.getElementById("question").style.display = "none";
    document.getElementById("videoContainer").style.display = "block";

    // Play tap sound
    tapSound.currentTime = 0;

tapSound.play().catch(() => {});
    setTimeout(() => {
        video.currentTime = 0;
        video.muted = false;
        video.volume = 1;
        video.play();
    }, 1000);

}
