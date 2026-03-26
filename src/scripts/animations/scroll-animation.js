export function initScrollAnimations() {
  /* EFEITO DOS CARDS */
  gsap.from(".card", {
    opacity: 0,
    y: 10,
    filter: "blur(5px)",
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".card-cidades",
      start: "0% 95%",
      end: "0% 70%",
      scrub: 2
    }
  });

  // Efeito na lista de cidades
  gsap.from(".agradecimento ul li", {
    opacity: 0,
    x: 30,
    filter: "blur(5px)",
    stagger: 0.03,
    scrollTrigger: {
      trigger: ".agradecimento ul li",
      scrub: true,
      start: "0% 95%",
      end: "10% 65%"
    }
  });

  gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      start: "0% 90%",
      end: "19% 30%",
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  /* ANIMAÇÃO NAS PALAVRAS */
  const TextosSplits = document.querySelectorAll(".textSplit");

  TextosSplits.forEach((TextosIndividuaisSplit) => {
    const split = SplitText.create(TextosIndividuaisSplit, {
      type: "lines, words, chars", // Tipo ==> letras, palavras, linhas...
      mask: "lines"
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      stagger: 0.03,
      duration: 0.3,
      scrollTrigger: {
        trigger: TextosIndividuaisSplit
      }
    });
  });
}
