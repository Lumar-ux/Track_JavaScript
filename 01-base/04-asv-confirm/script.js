/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let age=prompt("quel age as-tu ?");
    while(age == false){
        age=prompt("quel age as-tu ?");
    }
    let sexe=prompt("Es-tu un homme, une femme ou autre chose ?")
    while(sexe == false){
         sexe=prompt("Es-tu un homme, une femme ou autre chose ?")
    }
    let ville=prompt("De qu'elle ville vient tu ?")
    while(ville == false){
        ville=prompt("De qu'elle ville vient tu ?")
    }
})();
