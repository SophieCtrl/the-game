class Player {
  constructor(gameScreen, left, top) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.element = document.createElement("img");
    this.currentImage = "../images/player-idle.gif";
    this.element.src = this.currentImage;
    this.element.style.position = "absolute";
    this.element.style.width = `70px`;
    this.element.style.height = `140px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
    this.directionX = 0;
    this.directionY = 0;
    this.oxygenLevel = 100;
    this.backwardFlowSpeed = 1; // Speed at which the player flows backwards
    this.backwardFlowInterval = null; // Interval for backward flow
  }

  move() {
    // Update player's position based on directionX and directionY

    this.left += this.directionX;
    this.top += this.directionY;

    /*

    let newImage = "../images/player-idle.gif";
    if (this.directionX !== 0) {
      newImage = "../images/player-fast.gif";
    }

    if (newImage !== this.currentImage) {
      this.currentImage = newImage;
      this.element.src = newImage;
    }

    */

    // Determine the new image to display
    let newImage = "../images/player-idle-crop.gif";
    if (this.directionX !== 0) {
      newImage = "../images/player-fast-crop.gif";
      this.element.style.width = `140px`;
      this.element.style.height = `70px`;
      // let player swim
      if (this.top < 87) {
        newImage = "../images/player-swiming-crop.gif";
      }
      // Clear backward flow interval if the player is moving
      if (this.backwardFlowInterval) {
        clearInterval(this.backwardFlowInterval);
        this.backwardFlowInterval = null;
      }
    } else {
      newImage = "../images/player-idle-crop.gif";
      this.element.style.width = `70px`;
      this.element.style.height = `140px`;
      // Start backward flow interval if the player is not moving
      if (!this.backwardFlowInterval) {
        this.startBackwardFlow();
      }
    }
    if (newImage !== this.currentImage) {
      this.currentImage = newImage;
      this.element.src = newImage;
    }

    // Ensure player stays within the game screen and water
    if (this.top < 85) {
      this.top = 85;
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

  startBackwardFlow() {
    this.backwardFlowInterval = setInterval(() => {
      this.left -= this.backwardFlowSpeed;
      this.updatePosition();
    }, 50);
  }

  increaseBackwardDrift() {
    this.backwardFlowSpeed += 0.7;
  }
}
