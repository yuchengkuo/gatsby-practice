import { gsap } from "gsap";

function CardEffect(e, deg = 5) {
  // add perspective to parent
  // e.currentTarget.parentElement.style.perspective = "1000px";

  // 3d tilt effect
  const posX = e.nativeEvent.offsetX;
  const widX = e.currentTarget.clientWidth;
  const rotateX = ((posX - widX / 2) / (widX / 2)) * deg;
  const posY = e.nativeEvent.offsetY;
  const widY = e.currentTarget.clientHeight;
  const rotateY = ((widY / 2 - posY) / (widY / 2)) * deg;

  gsap.to(e.currentTarget, {
    transformPerspective: 500,
    rotationX: rotateY,
    rotationY: rotateX,
    duration: 0.2,
    ease: "power2.out",
  });
  // e.currentTarget.style.transform = `rotateY(${rotateX}deg) rotateX(${rotateY}deg)`;

  // light effect
  //   const light = e.currentTarget.children[0];
  //   light.style.display = "unset";
  //   light.style.left = `${posX}px`;
  //   light.style.top = `${posY}px`;
}

export default CardEffect;
