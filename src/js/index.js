import '../SCSS/main.scss';

// Example animation import
import { fadeIn } from './animations';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded!');
  fadeIn();
});
if (module.hot) {
    module.hot.accept(); // Accept updates for modules (this is for JS)
  }