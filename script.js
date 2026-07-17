const bgMusic = new Audio("mmm.mp3");
bgMusic.loop = true;
bgMusic.volume = 1;

const tapSound = new Audio("mu.mp4"); // Agar file ka naam mu.mp3 hai to yahan mu.mp3 likho

function startWebsite() {

    bgMusic.play().catch(() => {});

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("question").style.display = "block";
}

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

    // Video starts after tap sound
    setTimeout(() => {

        video.currentTime = 0;
        video.muted = false;
        video.volume = 1;

        video.play().catch(err => {
            console.log(err);
        });

    }, 1000);

}
