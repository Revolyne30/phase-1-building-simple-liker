// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const hearts = document.querySelectorAll(".like-glyph");

  // Add event listeners to all hearts
  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // On success, change the heart to full and add activated-heart class
          heart.classList.add("activated-heart");
          heart.innerText = FULL_HEART;
        })
        .catch(() => {
          // On failure, display the error modal with a message
          modalMessage.innerText = "Server Error. Please try again.";
          errorModal.classList.remove("hidden");

          // Hide the modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
