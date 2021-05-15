function CardTiltEffect(deg, e) {
  //3d rotate effect
  const deg = 5;
  const posX = e.nativeEvent.offsetX;
  const widX = e.currentTarget.clientWidth;
  let rotateX = 0;
  rotateX = ((posX - widX / 2) / (widX / 2)) * deg;
  const posY = e.nativeEvent.offsetY;
  const widY = e.currentTarget.clientHeight;
  let rotateY = 0;
  rotateY = ((widY / 2 - posY) / (widY / 2)) * deg;
  e.currentTarget.style.transform = `rotateY(${rotateX}deg) rotateX(${rotateY}deg) scale3d(1.03,1.03,1.03)`;

  //light effect
  //   const light = e.currentTarget.children[0];
  //   light.style.display = "unset";
  //   light.style.left = `${posX}px`;
  //   light.style.top = `${posY}px`;
}

export default CardEffect;
