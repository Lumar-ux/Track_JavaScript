/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
            const textmod = document.getElementById("target"); 
            const today = new Date();
            const Year = today.getFullYear();
            const Month = today.getMonth() + 1;
            const DayW = today.getDay();
            const Day = today.getDate();
            const hours = today.getHours();
            const min = today.getMinutes();
            const dayweek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
            const monthyear = ["December", "Junary", "February", "March", "April", "May", "June","July","August","September","October","November"];
            textmod.textContent = dayweek[DayW] +" "+Day+" "+monthyear[Month] + " " + Year+", "+hours+"h"+min;
})();
