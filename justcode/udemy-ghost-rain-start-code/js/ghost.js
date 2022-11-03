function createGhost() {
  const ghostElement = document.createElement("div");

  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0px";
  ghostElement.style.left = "50%";

  let randomLeft = randomNum();
  ghostElement.style.left = randomLeft + "px";

  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bgElement.appendChild(ghostElement);
}

createGhost();

function randomNum() {
  let randomNumUnder755 = Math.floor(Math.random() * 755);

  return randomNumUnder755;
}
