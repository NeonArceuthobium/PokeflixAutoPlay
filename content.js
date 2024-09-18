document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.querySelector('video');  // Find the video element

    if (videoPlayer) {
        videoPlayer.addEventListener('ended', function () {
            // Find the 'Next Episode' button or link
            const nextButton = document.querySelector('a.next-episode');
            
            if (nextButton) {
                nextButton.click();  // Trigger the click event on the next episode button
            }
        });
    }
});