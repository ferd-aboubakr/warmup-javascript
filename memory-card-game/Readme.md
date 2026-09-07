Memory Card Game
A lightweight, responsive web-based memory card game built using vanilla HTML, CSS, and JavaScript. This project serves as a front-end warm-up exercise implementing DOM manipulation, event handling, local storage path caching, and basic state management without external frameworks or backend dependencies.

Features Realized
Dynamic Grid Generation: Automatically creates a 12-card grid (6 matched pairs) from a local array and renders them using real <img> tags injected via JavaScript.  
MD

3D Card Flipping Mechanics: Utilizes CSS perspective and transform transitions to create a smooth card-flipping effect.

State & Move Tracking: Keeps a live count of total moves played and pairs successfully discovered, complete with a dynamic victory notification.

Local Storage Integration: Caches and retrieves relative image paths using the browser's localStorage API.

Interactive Controls: Includes a fully functional restart button to clear the board, reset game state, and shuffle a fresh deck.

Project Structure
Plaintext
memory-card-game/
│
├── index.html
├── style.css
├── script.js
└── assets/
    └── images/
        ├── card1.jpeg
        ├── card2.jpeg
        ├── card3.jpeg
        ├── card4.jpeg
        ├── card5.jpeg
        └── card6.jpeg
How to Run the Project
Because this application loads local asset paths dynamically via JavaScript and localStorage, running it directly through the local file system (file:// protocol) will trigger browser security blocks.

Clone or download this repository locally.

Open the project folder in Visual Studio Code.

Install and launch the Live Server extension.

Right-click index.html and select Open with Live Server to run it at [http://127.0.0.1:5500](http://127.0.0.1:5500).

Guide for Future Contributors & Bonus Implementations
If you or another developer want to extend this project, here is how the core modules work and how you can approach implementing the bonus features:

Codebase Overview
index.html: Houses the markup skeleton, loading the UI components (counters, restart button, victory notice) and the core #game-board container.  
HTML
+ 1

style.css: Manages the grid positioning, 3D card perspective wrapper (perspective: 1000px), and backface visibility rules for the flip effect.

script.js: Handles initialization, deck shuffling using Array.prototype.sort(), click event binding, match validation logic, and UI updates.  
MD

Roadmap for Implementing Bonus Features
Add a Timer: Create a global seconds variable, initialize a setInterval() call inside startGame(), and clear it when pairs === 6. Display the output inside a new span in the .game-ui container.

Local Storage High Scores: Extend localStorage usage to store the lowest move count or fastest completion time using keys like localStorage.setItem('bestScore', moves). Compare new game victories against stored records on win.

Difficulty Levels: Expand the base image array to include 8 or 10 pairs, and update the CSS grid template columns dynamically (e.g., repeat(6, 1fr)) based on a difficulty selector dropdown.

Smooth Animations: Fine-tune the transition timing or add keyframe animations in style.css for a more polished victory bounce effect.