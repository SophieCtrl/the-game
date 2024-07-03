class Object {
  constructor(gameScreen, left, width, height) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = Math.random() * (550 - 130) + 130;
    this.width = width;
    this.height = height;
    this.movementSpeed = 0.5;
    this.element = document.createElement("img");
    this.treatsAndEnemies = [
      ["../images/treats/2.png", "I'm yours, my friend!", 50],
      ["../images/treats/3.png", "I'm yours, my friend!", 12],
      ["../images/treats/7.png", "I'm yours, my friend!", 50],
      ["../images/enemy/8.png", "I'm yours, my friend!", 15],
      ["../images/treats/9.png", "I'm yours, my friend!", 10],
      ["../images/treats/17.png", "I'm yours, my friend!", 50],
      ["../images/treats/19.png", "I'm yours, my friend!", 50],
      ["../images/treats/8.png", "Don't touch me, bro!", -5],
      ["../images/enemy/10.png", "Don't touch me, bro!", -15],
      ["../images/enemy/26.png", "Don't touch me, bro!", -5],
    ];
    const randomItem =
      this.treatsAndEnemies[
        Math.floor(Math.random() * this.treatsAndEnemies.length)
      ];
    this.imageSrc = randomItem[0];
    this.statement = randomItem[1];
    this.points = randomItem[2];
    this.element.src = this.imageSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Move the obstacle down by 3px
    this.left -= this.movementSpeed;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }

  increaseSpeed() {
    this.movementSpeed += 0.5;
  }
}
