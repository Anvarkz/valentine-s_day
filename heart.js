const hearts = [];
const pinks = ["#ff748c", "#ff8da1", "#ffa7b6"];

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.theta = Math.random() * Math.PI * 2;
    this.createHeartElement();
    this.setHeartColor();
    this.setHeartPosition();
    this.setHeartRemoval();
  }

  createHeartElement() {
    const heartEl = document.createElement("div");
    heartEl.classList.add("heart");
    document.body.append(heartEl);
    this.el = heartEl;

    const heartLeftEl = document.createElement("div");
    heartLeftEl.classList.add("left");
    heartEl.appendChild(heartLeftEl);

    const heartRightEl = document.createElement("div");
    heartRightEl.classList.add("right");
    heartEl.appendChild(heartRightEl);
  }

  setHeartColor() {
    const color = pinks[Math.floor(Math.random() * pinks.length)];
    this.el.style.background = color;
    this.el.childNodes[0].style.background = color;
    this.el.childNodes[1].style.background = color;
  }

  setHeartPosition() {
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
  }

  setHeartRemoval() {
    setTimeout(() => {
      this.el.remove();
      hearts.splice(hearts.indexOf(this), 1);
    }, 10000);
  }

  update() {
    this.x += Math.cos(this.theta) * 1;
    this.y += 1;
    this.theta += 0.01;
    this.setHeartPosition();
  }
}

setInterval(() => {
  const heart = new Heart(Math.random() * window.innerWidth, -100);
  hearts.push(heart);
}, 200);

setInterval(() => {
  hearts.forEach((heart) => heart.update());
}, 10);