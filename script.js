const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      currentInput = "";
    } else if (value === "=") {
      try {
        currentInput = eval(
          currentInput.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-")
        ).toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});

// ✅ Keyboard support
document.addEventListener("keydown", (e) => {
  if (/[0-9+\-*/.]/.test(e.key)) {
    currentInput += e.key;
  } else if (e.key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } else if (e.key.toLowerCase() === "c") {
    currentInput = "";
  }
  display.value = currentInput;
});
