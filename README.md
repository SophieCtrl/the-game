# Dive Quest: Fish Frenzy

Welcome to Dive Quest: Fish Frenzy! Dive into an underwater world, catch fish, avoid dangers, and keep an eye on your oxygen levels. How long will you be able to withstand the current and keep your oxygen level stable?

## Presentation

https://docs.google.com/presentation/d/1wt8yliV9pD-geo7G7_cgp7SD0hoQ8B8FVv_rOBHLowI/edit?usp=sharing

## Table of Contents

1. [Game Description](#game-description)
2. [Installation](#installation)
3. [How to Play](#how-to-play)
4. [Game Mechanics](#game-mechanics)
5. [Sound Effects and Music](#sound-effects-and-music)
6. [Logging Scores](#logging-scores)
7. [File Structure](#file-structure)
8. [Contributing](#contributing)
9. [License](#license)

## Game Description

Dive Quest: Fish Frenzy is an engaging underwater adventure where players control a diver. The objective is to catch as many fish as possible while avoiding creatures that don't look for company and managing oxygen levels. The game features different levels, each with increasing difficulty.

## Installation

To run the game locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/yourusername/dive-quest-fish-frenzy.git
2. Navigate to the project directory:
   cd dive-quest-fish-frenzy
3. Open index.html in your web browser.

# How to Play

### Start the Game

Click the "Let's Dive In!" button.

### Control the Diver

Use the arrow keys to move the diver:

- Up: ArrowUp
- Down: ArrowDown
- Left: ArrowLeft
- Right: ArrowRight

### Catch Fish

Swim over fish to catch them and increase your score.

### Avoid Dangerous Creatures

Avoid creatures that can reduce your score and oxygen levels.

### Manage Oxygen

Ensure the diver surfaces periodically to refill oxygen levels.

# Game Mechanics

### Movement

The diver moves based on arrow key inputs.

### Score

Catching fish increases the score.

### Oxygen

Oxygen decreases while diving and refills when the diver surfaces.

### Levels

Each level increases the difficulty and the speed of objects.

# Sound Effects and Music

Background music and sound effects enhance the game experience.

### Audio Files

- bgMusic.mp3: Background music.
- collectSound.mp3: Sound effect for catching fish.
- avoidSound.mp3: Sound effect for avoiding dangerous creatures.
- levelUpSound.wav: Sound effect for leveling up.
- oxygenLowSound.wav: Sound effect for low oxygen warning.
- fillUpOxygenSound.mp3: Sound effect for refilling oxygen.
- gameOverSound.mp3: Sound effect for game over.
- startSound.mp3: Sound effect for game start.

### Implementation

Audio elements are used in the HTML and controlled via JavaScript for playing, stopping, and looping sounds.

# Logging Scores

Players can log their scores with their name to keep track of high scores locally:

1. Enter your name in the input field after the game ends.
2. Click the "Log Score" button to save your score.
3. Scores are stored in localStorage and displayed on the scoreboard.

# File Structure

dive-quest-fish-frenzy/
│
├── index.html # Main HTML file
├── styles/
│ └── style.css # CSS styles
├── scripts/
│ ├── script.js # Main JavaScript file for game logic
│ ├── game.js # Game class and mechanics
│ ├── player.js # Player class and mechanics
│ └── objects.js # Object class and mechanics
├── images/ # Images used in the game
│ └── logo1.png # Logo image
├── sounds/ # Audio files used in the game
│ ├── bgMusic.mp3
│ ├── collectSound.mp3
│ ├── avoidSound.mp3
│ ├── levelUpSound.wav
│ ├── oxygenLowSound.wav
│ ├── fillUpOxygenSound.mp3
│ ├── gameOverSound.mp3
│ └── startSound.mp3
└── README.md # This file

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
