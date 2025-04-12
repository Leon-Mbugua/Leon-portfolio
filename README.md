# Leon Mbugua - Software Developer

Hi there! I'm Leon Mbugua Gichuhi, an 18-year-old software developer from Nairobi, Kenya. I'm passionate about building clean, functional, and creative solutions using code. I specialize in both frontend and backend development, and I’m always looking to push my limits.

---

## Skills
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Node.js, PHP
- **Version Control**: Git & GitHub
- **Tools**: Visual Studio, VS Code

---

## Featured Project: Car Guessing Game
A simple and fun game built using C# on Visual Studio, where the user has to guess the correct car brand/model.

[Check it out here](#) *(link once uploaded)*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Car Guessing Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      text-align: center;
      padding: 50px;
    }
    input, button {
      padding: 10px;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <h1>Car Guessing Game</h1>
  <p>Guess the car brand I'm thinking of:</p>
  <input type="text" id="guessInput" placeholder="Type car brand">
  <button onclick="checkGuess()">Guess</button>
  <p id="result"></p>

  <script>
    const carBrands = ["Toyota", "Honda", "BMW", "Mercedes", "Nissan", "Ford"];
    const answer = carBrands[Math.floor(Math.random() * carBrands.length)].toLowerCase();
    let attempts = 3;

    function checkGuess() {
      const guess = document.getElementById("guessInput").value.toLowerCase();
      const result = document.getElementById("result");

      if (guess === answer) {
        result.textContent = "Correct! You guessed it!";
      } else {
        attempts--;
        if (attempts > 0) {
          result.textContent = `Wrong! You have ${attempts} attempt(s) left.`;
        } else {
          result.textContent = `Game Over! The correct answer was: ${answer}`;
        }
      }
    }
  </script>

</body>
</html>
---

## Current Focus
- Growing my GitHub portfolio
- Improving my C# and Python skills
- Learning full-stack development

---

## Contact
- **Email**: leonmbugua006@gmail.com
- **Location**: Nairobi, Kenya

THANK YOU! 😊 



