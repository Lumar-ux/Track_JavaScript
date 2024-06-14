/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const answer = prompt("Veut tu un gateau (oui/non): ");
    if (answer==="oui"){
        alert("Tu n'accepte que les bonne choses, Félicitation")
    }else{
        alert("Du gateau ne se refuse jamais")
    }
    // your code here
})();
