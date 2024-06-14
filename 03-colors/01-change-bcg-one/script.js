/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let cred=document.getElementById("red");
    let cgreen=document.getElementById("green");
    let cyellow=document.getElementById("yellow");
    let cblue=document.getElementById("blue");
    cred.addEventListener("click", () => {cred.style.backgroundColor = "red"});
    cgreen.addEventListener("click", () => {cgreen.style.backgroundColor = "green"});
    cyellow.addEventListener("click", () => {cyellow.style.backgroundColor = "yellow"});
    cblue.addEventListener("click", () => {cblue.style.backgroundColor = "blue"});
})();