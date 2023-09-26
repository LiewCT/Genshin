// Check if the user has seen the image before
const hasSeenImage = localStorage.getItem('hasSeenImage');

if (!hasSeenImage) {
  // If the user hasn't seen the image, show it
  const image = document.getElementById('image');
  const showButton = document.getElementById('showButton');

  showButton.addEventListener('click', () => {
    image.style.display = 'block';
    showButton.style.display = 'none';

    // Set a flag in local storage to indicate that the user has seen the image
    localStorage.setItem('hasSeenImage', 'true');
  });
} else {
  // If the user has seen the image before, hide the button
  const showButton = document.getElementById('showButton');
  showButton.style.display = 'none';
}
