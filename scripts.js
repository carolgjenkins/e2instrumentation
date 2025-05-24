// JavaScript to toggle the hover effect every 3 seconds
const flipCard = document.getElementById('auto-flip-card');
setInterval(() => {
  flipCard.classList.toggle('hover');
}, 3000); // 3 seconds