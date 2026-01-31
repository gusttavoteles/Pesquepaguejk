window.addEventListener('load', () => {
  const track = document.querySelector('.carousel-track'); /* carrosel do restaurante*/
  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 1; // ajuste a velocidade aqui
    if (scrollAmount >= track.scrollWidth / 2) { 
      scrollAmount = 0; // volta ao início
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});

window.addEventListener('load', () => {
  const track = document.querySelector('.carousel-track-bar'); /* carrosel do restaurante*/
  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 1; // ajuste a velocidade aqui
    if (scrollAmount >= track.scrollWidth / 2) { 
      scrollAmount = 0; // volta ao início
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});

