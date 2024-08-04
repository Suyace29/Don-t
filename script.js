document.addEventListener("DOMContentLoaded", function() {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const subtitle = document.getElementById("subtitle");
    const message = document.getElementById("message");
    const hiddenMessage = document.getElementById("hidden-message");

    image1.addEventListener("click", function() {
        image1.style.display = "none";
        image2.style.display = "block";
        subtitle.textContent = "It's okay, Shreya."; // Change text after image click
        message.style.display = "none"; // Hide the message text
        hiddenMessage.style.display = "block"; // Show hidden message
        alert("Don't worry, you're in safe hands! 😂 0143 is your OTp"); // Alert with laughter emoji
    });

    image2.addEventListener("click", function() {
        image2.style.display = "none";
        image1.style.display = "block";
        subtitle.textContent = "You're Hacked! 😈"; // Reset text
        message.style.display = "block"; // Show message text
        hiddenMessage.style.display = "none"; // Hide hidden message
    });
});
