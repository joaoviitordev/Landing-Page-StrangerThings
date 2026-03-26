import { initPreloader } from './animations/preloader-animation.js';
import { initHeroAnimation } from './animations/hero-animation.js';
import { initScrollAnimations } from './animations/scroll-animation.js';

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  // Scroll Suave + Efeito Parallax com Gsap
  ScrollSmoother.create({
    smooth: 1.5,
    effects: true
  });

  const animarPagina = () => {
    initHeroAnimation();
    initScrollAnimations();
  };

  initPreloader(animarPagina);
});
