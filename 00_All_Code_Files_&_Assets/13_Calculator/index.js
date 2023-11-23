let inputValues = document.querySelectorAll("input[type=button]");
const display = document.querySelector(".display input");

inputValues.forEach((button) => {
    button.addEventListener("click", (e) => {
        const addValue = e.target.value;

        if (addValue === "AC") {
            display.value = "";
        } else if (addValue === "DE") {
            // Handling different cases for deletion of last characters
            if (display.value.length > 0) {
                display.value = display.value.slice(0, -1);
            }
        } else if (addValue === "=") {
            try {
                // safer method for evaluation
                display.value = Function('"use strict";return (' + display.value + ')')();
            } catch (error) {
                display.value;
            }
        } else {
            display.value += addValue;
        }
    });
});
// /* Media Queries */
// @media (max-width: 568px) {
//     .calculator {
//         background-color: rgb(48, 58, 75);
//         box-shadow: none;
//         padding: 0;
//     }
// }

// /* Updated: Media Query for 450px */
// @media (max-width: 450px) {
//     .container h4 {
//         font-size: 1.2rem;
//     }
//     .calculator {
//         padding: 10px;
//     }
//     form .display input {
//         font-size: 20px;
//     }
// }

// /* Updated: Media Query for 400px */
// @media (max-width: 400px) {
//     .container h4 {
//         font-size: 1rem;
//     }
//     .calculator {
//         padding: 5px;
//     }
//     form .display input {
//         font-size: 18px;
//     }
// }