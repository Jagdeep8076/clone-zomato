// Add scroll reveal effect to "Why Choose Us" cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll('.choose-card').forEach(card => {
  observer.observe(card);
});

// Optional: Add virtual CSS transitions on search focus
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('focus', () => {
  searchBox.style.borderColor = '#ff5252';
  searchBox.style.boxShadow = '0 0 10px #ffcdd2';
});
searchBox.addEventListener('blur', () => {
  searchBox.style.borderColor = '#c62828';
  searchBox.style.boxShadow = 'none';
});
