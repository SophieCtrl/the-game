class Object {
  constructor(gameScreen, left) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = Math.random() * (540 - 130) + 130;
    this.movementSpeed = 0.5;
    this.element = document.createElement("img");
    this.treatsAndEnemies = [
      ["../images/objects/fish-big.gif", "I'm yours, my friend!", 20, 70],
      [
        "../images/objects/fish-dart.gif",
        "You found me! Now, what's your wish?",
        40,
        70,
      ],
      ["../images/objects/fish-ezgif.gif", "I'm yours, my friend!", 30, 70],
      [
        "../images/objects/mermaid.gif",
        "Ugh, humans! Keep your hands to yourself!",
        -30,
        160,
      ],
      [
        "../images/objects/shark.gif",
        "I'm not scary, just misunderstood!",
        20,
        140,
      ],
      [
        "../images/objects/fishyfish.gif",
        "Sure thing, bro! Let's swim together!",
        15,
        50,
      ],
      [
        "../images/objects/fish-big.gif",
        "Thanks for the pick, buddy! I feel like a starfish!",
        25,
        70,
      ],
      [
        "../images/objects/fish-dart.gif",
        "Seriously? I'm trying to swim here!",
        -20,
        70,
      ],
      ["../images/objects/fish-ezgif.gif", "I'm all yours, my friend!", 50, 70],
    ];
    const randomItem =
      this.treatsAndEnemies[
        Math.floor(Math.random() * this.treatsAndEnemies.length + 1)
      ];
    this.imageSrc = randomItem[0];
    this.statement = randomItem[1];
    this.points = randomItem[2];
    this.width = randomItem[3];
    this.element.src = this.imageSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    //this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move(lvl) {
    // Move objects to left by 0.5px + current level devided by 2 in px
    this.left -= this.movementSpeed + lvl / 2;

    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}
