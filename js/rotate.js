const circlePath = document.getElementById("circlePath");
const textPath = document.querySelector(".rotate-text");

let angle = 0;
const rotationSpeed = 0.01;

function animateText() {
  const x = 50 + 50 * Math.cos(angle);
  const y = 50 + 50 * Math.sin(angle);
  const rotateAngle = (angle * 180) / Math.PI;

  textPath.setAttribute("startOffset", `${x}%`);
  textPath.setAttribute("side", rotateAngle > 180 ? "right" : "left");
  textPath.setAttribute("transform", `rotate(${rotateAngle}, 50, 50)`);

  angle += rotationSpeed;
  if (angle >= 2 * Math.PI) {
    angle = 0;
  }

  requestAnimationFrame(animateText);
}

animateText();
