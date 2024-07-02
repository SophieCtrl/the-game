window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game = null;

  // Function that handles keydown event
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  // Function that handles keyup event
  function handleKeyup(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft",
    ];

    // Check if the released key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Reset player's directionX and directionY based on the key released
      switch (key) {
        case "ArrowRight":
        case "ArrowLeft":
          game.player.directionX = 0;
          break;
        case "ArrowUp":
        case "ArrowDown":
          game.player.directionY = 0;
          break;
      }
    }
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game();
    game.start();
    console.log("start game");
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);

  restartButton.addEventListener("click", () => {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }
};
