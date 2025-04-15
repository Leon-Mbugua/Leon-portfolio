const cars = [
  {
    brand: "Toyota",
    hints: [
      "Founded in 1937",
      "Known for reliability",
      "Excels in off-road terrain (Land Cruiser)",
      "Popular in Africa",
      "Affordable and efficient"
    ]
  },
  {
    brand: "Ferrari",
    hints: [
      "Founded in 1939",
      "Luxury and performance",
      "Extremely fast (800+ hp)",
      "Rare and very expensive",
      "Known for Formula 1 heritage"
    ]
  },
  {
    brand: "Tesla",
    hints: [
      "Electric cars",
      "Founded in 2003",
      "Autopilot feature",
      "Very fast acceleration",
      "Eco-friendly and innovative"
    ]
  }
];

let currentCar = cars[Math.floor(Math.random() * cars.length)];
let currentHint = 0;

function showHint() {
  if (currentHint < currentCar.hints.length) {
    document.getElementById("hint").innerText = currentCar.hints[currentHint];
    currentHint++;
  } else {
    document.getElementById("hint").innerText = "No more hints! Try your best!";
  }
}

function checkGuess() {
  const guess = document.getElementById("guess").value.trim().toLowerCase();
  if (guess === currentCar.brand.toLowerCase()) {
    document.getElementById("result").innerText = "Correct! It's " + currentCar.brand + "!";
  } else {
    document.getElementById("result").innerText = "Incorrect. Try another hint or guess again.";
    showHint();
  }
}

// Show the first hint automatically
window.onload = showHint;
