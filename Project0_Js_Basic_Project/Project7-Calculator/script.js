// Select the <form> element
const formTag = document.querySelector("form");

// Prevent the form from submitting (refreshing the page) when pressing Enter or clicking a submit button
formTag.addEventListener("submit", (e) => e.preventDefault());

// Select the display input where the numbers and results will show
const display = document.querySelector("#display-screen");

// Select all calculator buttons
const buttons = document.querySelectorAll(".calci-button");

// Loop through each button and add a click event
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value; // Get the value of the clicked button (e.g., "1", "+", ".", "C", "=")
    let current = display.value; // Current content in the display [we use here input tag so uski value access karne ke liye use .value method ]

    // -------------------------
    // 1️⃣ Clear display if "C" is pressed
    // -------------------------
    if (value === "C") {
      display.value = ""; // Reset display
      return; // Stop further execution for this click [jab se click kare value to stop kardo iss baar ke liye ]
    }

    //USe of DEL button to delete last entry
    
       if(value==='DEL'){
        display.value = current.slice(0, -1); // removes last character method of string[splice nhi hota ]
        return
       }
         

    // -------------------------
    // 2️⃣ Evaluate the expression if "=" is pressed
    // -------------------------
    if (value === "=") {
      try {
        // Replace calculator symbols with JS operators
        // ÷ → / , × → *
        let expression = current
          .replace(/÷/g, "/") // Regular expression: /÷/g
          // /÷/ → matches all "÷" characters
          // g → global, i.e., replace all occurrences
          .replace(/×/g, "*"); // Similarly replace "×" with "*"

        // eval() calculates the string expression as JavaScript code
        //Only work with +,-,*,/ symbol and use to calculater integer value with expression when written in string.
        //The eval() function returns the result of evaluating the expression, and the datatype depends on what the expression evaluates to.
        //                 eval("2 + 3 * 4");  // returns 14 → Number
        // eval("'Hello ' + 'World'"); // returns "Hello World" → String
        // eval("true");       // returns true → Boolean
        //Eg: console.log("5 + 2") -> 7
        display.value = eval(expression);
      } catch (err) {
        display.value = "Error"; // Show error if expression is invalid
      }
      return; // Stop further execution after "="
    }

    // -------------------------
    // 3️⃣ Prevent multiple operators in a row
    // -------------------------
    const operators = ["+", "-", "×", "÷"]; // List of allowed operators
    const lastChar = current.slice(-1); // Get the last character in the display

    if (operators.includes(value)) {
      // If clicked value is an operator
      if (current === "" || operators.includes(lastChar)) {
        // Don't allow operator at the start
        // Don't allow multiple operators in a row (like ++ or ×÷)
        return;
      }
    }

    // -------------------------
    // 4️⃣ Handle decimal point
    // -------------------------
    if (value === ".") {
      // Split the current display by operators to get the last number
      // Regular expression: /[\+\-\×\÷]/
      // [ ... ] → character set
      // \+ → matches literal +
      // \- → matches literal -
      // × → matches multiplication symbol
      // ÷ → matches division symbol
      // So split breaks the string into numbers by operators
      let parts = current.split(/[\+\-\×\÷]/);

      let lastNumber = parts[parts.length - 1]; // Get the last number in display

      if (lastNumber.includes(".")) {
        // Don't allow multiple dots in the same number
        return;
      }
    }
    
    // -------------------------
    // 5️⃣ Append the value to the display
    // -------------------------
    display.value += value;
  });
});
