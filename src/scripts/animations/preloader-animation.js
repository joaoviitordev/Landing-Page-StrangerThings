export function initPreloader(onCompleteCallback) {
  const tl = gsap.timeline({
    onComplete() {
      if (onCompleteCallback) onCompleteCallback();
      gsap.to(".pre-loader", {
        opacity: 0,
        duration: 0.5,
        display: "none"
      });
    }
  });

  tl.to(".pre-loader path", {
    strokeDashoffset: 0,
    duration: 1.5
  });

  tl.to(".pre-loader path", {
    fill: "rgb(200, 22, 22)",
    duration: 1
  });
}
