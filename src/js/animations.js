export const fadeIn = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      el.style.animation = 'fade-in 1s ease-in-out';
    });
  };
  