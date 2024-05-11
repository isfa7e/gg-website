// Function to set the GIF as background image and repeat it when it finishes
function setGIFasWallpaper() {
    var body = document.querySelector("body");
    body.style.backgroundImage = "url('wallpepar.gif')";
  
    // Reset the background image when the GIF finishes
    setTimeout(setGIFasWallpaper, 100); // Repeat after 100 milliseconds
  }
  
  // Call the function to start the wallpaper
  setGIFasWallpaper();