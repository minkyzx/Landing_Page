const carousel = document.getElementById('carousel');
const indicators = document.querySelectorAll('.indicators span');

carousel.addEventListener('scroll', () => {
  const cardWidth = carousel.querySelector('.card').offsetWidth;
  const scrollPosition = carousel.scrollLeft;
  const index = Math.round(scrollPosition / (cardWidth + 30)); // Ajuste do espaço entre os cards
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
});