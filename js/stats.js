class ScoreBar {
  constructor() {
    this.score = 0;
    this.currentLvl = 1;
    this.playersScore = document.querySelector("#score");
    this.playersOxygen = document.querySelector("#oxygen");
    this.oxygenBar = document.querySelector("#oxygen-bar");
    this.scoreBar = document.querySelector("#score-bar");
    this.oxygenBar = document.querySelector("#oxygen-filling");
    this.scoreBar = document.querySelector("#score-filling");
    this.stats = document.querySelector("#stats");
    this.lvl = document.querySelector("#lvl");


  updateScore(newScore) {
    // Update score bar with new score
  }

  updateLevel() {

  }
}
}

class OxygenBar {
  constructor() {
    // Initialize oxygen bar
  }

  updateOxygenLevel(newOxygenLevel) {
    // Update oxygen bar with new oxygen level
  }
}

class LivesDisplay {
  constructor() {
    // Initialize lives display
  }

  updateLivesRemaining(livesRemaining) {
    // Update lives display with remaining lives
  }
}
