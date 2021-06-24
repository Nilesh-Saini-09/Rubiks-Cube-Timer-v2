// Links to share your time on social media


// Tweet Time
const twitterBtn = document.getElementById("twitter");

function tweetTime() {
    const time = displayTime.innerText;
  
    const twitterUrl = `https://twitter.com/intent/tweet?text= I solved my 3x3 cube in ${displayTime.innerText} seconds!!! @SpeedcubingC `;
    window.open(twitterUrl, "_blank");
  }

  
twitterBtn.addEventListener("click", tweetTime);