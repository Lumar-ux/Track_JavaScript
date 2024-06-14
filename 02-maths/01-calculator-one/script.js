/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("addition").addEventListener("click", () => {
        let nb1 = document.getElementById("op-one").value;
        let nb2 = document.getElementById("op-two").value;
        let res = ""
        res = parseInt(nb1) + parseInt(nb2);
        alert(res);
    });
    document.getElementById("substraction").addEventListener("click", () => {
        let nb1 = document.getElementById("op-one").value;
        let nb2 = document.getElementById("op-two").value;
        let res = ""
        res = parseInt(nb1) - parseInt(nb2);
        alert(res);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let nb1 = document.getElementById("op-one").value;
        let nb2 = document.getElementById("op-two").value;
        let res = ""
        res = parseInt(nb1) * parseInt(nb2);
        alert(res);
    });

    document.getElementById("division").addEventListener("click", () => {
        let nb1 = document.getElementById("op-one").value;
        let nb2 = document.getElementById("op-two").value;
        let res = ""
        res = parseInt(nb1) / parseInt(nb2);
        alert(res);
    });
})();
