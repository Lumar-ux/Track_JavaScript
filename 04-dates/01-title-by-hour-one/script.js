/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const textmod = document.getElementById("target");
    const date1 = new Date();
    if (date1.getHours()<=18&&date1.getHours()>0){
        textmod.textContent = "Bonjour";
        console.log(date1.getHours());
    }else{
        textmod.textContent = "Bonsoir";
        console.log(date1.getHours());
    }
})();
