class Player {
  constructor(gameScreen, left, top, width, height) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.element = document.createElement("img");
    this.element.src = "../images/player-idle.gif";
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
    this.directionX = 0;
    this.directionY = 0;
    this.oxygenLevel = 100;
  }

  move() {
    // Update player's position based on directionX and directionY
    this.left += this.directionX;
    this.top += this.directionY;

    // Determine the new image to display
    if (this.directionX !== 0) {
      this.element.src = "../images/player-fast.gif";
    } else if (this.directionY !== 0) {
      this.element.src = "../images/player-idle.gif";
    }

    // Ensure player stays within the game screen and water
    if (this.left < 0) {
      this.left = 0;
    }
    if (this.top < 80) {
      this.top = 80;
    }
    if (this.left > this.gameScreen.offsetWidth - this.width - 0) {
      this.left = this.gameScreen.offsetWidth - this.width - 0;
    }
    if (this.top > this.gameScreen.offsetHeight - this.height - 0) {
      this.top = this.gameScreen.offsetHeight - this.height - 0;
    }

    // Update the player's position on the screen
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollect(object) {
    const playerRect = this.element.getBoundingClientRect();
    const objectRect = object.element.getBoundingClientRect();

    if (
      playerRect.left < objectRect.right &&
      playerRect.right > objectRect.left &&
      playerRect.top < objectRect.bottom &&
      playerRect.bottom > objectRect.top
    ) {
      console.log("collect");
      return true;
    } else {
      return false;
    }
  }

  decreaseOxygen() {
    this.oxygenLevel -= 0.1;
    if (this.oxygenLevel < 0) this.oxygenLevel = 0;
  }

  fillUpOxygen() {
    this.oxygenLevel += 2;
    if (this.oxygenLevel > 100) this.oxygenLevel = 100;
  }

  increasePace() {}
}