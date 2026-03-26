export function initHeroAnimation() {
  /* EFEITOS DA HERO - Efeito de fade */
  gsap.from(".hero", {
    opacity: 0,
    duration: 1.3
  });

  // Efeito do Monstro vindo de cima
  gsap.from(".hero picture:nth-child(1)", {
    y: -70,
    duration: 1.3
  });

  // Efeito dos personagens vindo de baixo
  gsap.from(".hero picture:nth-child(2)", {
    y: 70,
    duration: 1.5
  });
}
