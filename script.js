const videoElement = document.getElementById("mainVideo");
const videoSource = document.getElementById("videoSource");

// Array of video URLs
const videos = [
    "https://videos.pexels.com/video-files/854216/854216-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/2961911/2961911-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/5866268/5866268-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/2882115/2882115-uhd_2560_1440_24fps.mp4"
];

let currentVideoIndex = 0;

// Switch the video every 5 seconds
setInterval(() => {
    // Increment to the next video
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    // Set the new video source
    videoSource.src = videos[currentVideoIndex];
    // Load the new video
    videoElement.load();
    // Play the new video
    videoElement.play();
}, 5000);

// Rotating meals every 5 seconds
window.onload = function() {
    const images = [
        "imgs/img1.png", "imgs/img2.png", "imgs/img3.png", 
        "imgs/img4.png", "imgs/img5.png", "imgs/img6.png", 
        "imgs/img7.png", "imgs/img8.png", "imgs/img9.png",
        "imgs/img10.png", "imgs/img11.png", "imgs/img12.png"
    ];
    let currentImageIndex = 0;
    const mealImage = document.getElementById("mealImage");

    setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mealImage.src = images[currentImageIndex];
    }, 5000);
};
