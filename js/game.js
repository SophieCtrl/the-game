class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.overWater = document.querySelector("#over-water");
    this.underWater = document.querySelector("#under-water");
    this.gameEndScreen = document.querySelector("#game-end");
    this.height = 600;
    this.width = 1000;
    this.objects = [];
    this.score = 0;
    this.currentLvl = 1;
    this.oxygen = 100;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.player = new Player(this.gameScreen, 200, 400, 140, 140);
    this.playersScore = document.querySelector("#score");
    this.playersOxygen = document.querySelector("#oxygen");
    this.objectStatement = document.querySelector("#object-statement");
    this.oxygenBar = document.querySelector("#oxygen-bar");
    this.scoreBar = document.querySelector("#score-bar");
    this.oxygenBar = document.querySelector("#oxygen-filling");
    this.scoreBar = document.querySelector("#score-filling");
    this.stats = document.querySelector("#stats");
    this.lvl = document.querySelector("#lvl");
  }
  start() {
    this.gameScreen.style.width = this.width + "px";
    this.gameScreen.style.height = this.height + "px";
    this.startScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.stats.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    this.update();
    this.gameIsOver && clearInterval(this.gameIntervalId);
  }

  displayObjectStatement(statement) {
    this.objectStatement.style.display = "flex"; // Ensure the element is displayed
    this.objectStatement.style.backgroundColor = "white";
    this.objectStatement.style.borderColor = "black";
    this.objectStatement.innerText = statement;

    setTimeout(() => {
      this.objectStatement.style.backgroundColor = "transparent"; // Reset background to transparent
      this.objectStatement.innerText = ""; // Clear the text content
      this.objectStatement.style.display = "none"; // Hide the element after clearing
    }, 3000);
  }

  update() {
    this.player.move();

    // Check for collision and if an object is still on the screen
    for (let i = 0; i < this.objects.length; i++) {
      const object = this.objects[i];
      object.move(this.currentLvl); // increses speed depending on current level

      // If the player collides with an object
      if (this.player.didCollect(object)) {
        this.updateScore(object.points);
        this.updateOxygen();
        this.displayObjectStatement(object.statement);
        object.element.remove();
        this.objects.splice(i, 1);
        i--;
      }

      // If the object is off the screen (at the bottom)
      else if (object.left < 0) {
        object.element.remove();
        this.objects.splice(i, 1);
        i--;
      }
    }

    // Decrease divers oxygen level while diving
    if (this.player.top > 87) {
      this.player.decreaseOxygen();
      this.updateOxygen();
      //console.log("oxygen level is decreasing..  " + this.player.top);
    }
    // Increase divers oxygen level while surfacing
    else {
      this.player.fillUpOxygen();
      this.updateOxygen();
      //console.log("filling up oxygen..  " + this.player.top);
    }

    // If oxygen level raches 0, end the game
    if (this.player.oxygenLevel === 0) {
      this.endGame();
    }

    // If player leaves screen on left side
    if (this.player.left < -50) {
      this.endGame();
    }

    // Create a new object based on a random probability
    // when there is no other objects on the screen
    if (Math.random() > 0.99 && this.objects.length < 5) {
      this.objects.push(new Object(this.gameScreen, 1000));
    }
  }

  updateScore(points) {
    this.score += points;
    let lvlBarPercentage = this.score % 100; // Calculate the percentage for the current level
    this.playersScore.innerText = this.score;
    this.scoreBar.style.width = lvlBarPercentage + "%";
    this.levelUp();
  }

  levelUp() {
    // Check if the score has crossed a multiple of 100
    if (this.score >= this.currentLvl * 100 + 100) {
      this.currentLvl += 1;
      this.lvl.innerText = this.currentLvl;

      // increase divers backwards drift
      this.player.increaseBackwardDrift();

      // Access the background animation element
      const backgroundElement = document.getElementById("under-water");

      // Get the current animation duration
      const computedStyle = window.getComputedStyle(backgroundElement);
      const animationDuration = computedStyle.animationDuration;

      // Parse the duration and decrease it by 5 seconds
      let durationInSeconds = parseFloat(animationDuration);
      durationInSeconds = Math.max(durationInSeconds - 3, 1); // Ensure it doesn't go below 1 second

      // Set the new animation duration
      backgroundElement.style.animationDuration = `${durationInSeconds}s`;
    }
  }

  updateOxygen() {
    if (this.oxygenLevel > 100) this.oxygenLevel = 100;
    this.oxygenBar.style.width = Math.round(this.player.oxygenLevel) + "%";
    this.playersOxygen.innerText = Math.round(this.player.oxygenLevel);
  }

  endGame() {
    this.player.element.remove();
    this.objects.forEach((object) => {
      object.element.remove();
    });
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
