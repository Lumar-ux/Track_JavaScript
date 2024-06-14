/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let tabnb = [1,58,64,29,7,4,85,67,92,11];
        document.getElementById("n-1").textContent=tabnb[0];
        document.getElementById("n-2").textContent=tabnb[1];
        document.getElementById("n-3").textContent=tabnb[2];
        document.getElementById("n-4").textContent=tabnb[3];
        document.getElementById("n-5").textContent=tabnb[4];
        document.getElementById("n-6").textContent=tabnb[5];
        document.getElementById("n-7").textContent=tabnb[6];
        document.getElementById("n-8").textContent=tabnb[7];
        document.getElementById("n-9").textContent=tabnb[8];
        document.getElementById("n-10").textContent=tabnb[9];
        document.getElementById("min").textContent=Math.min(...tabnb);
        document.getElementById("max").textContent=Math.max(...tabnb);
        document.getElementById("sum").textContent=tabnb.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        document.getElementById("average").textContent=(tabnb.reduce((accumulator, currentValue) => accumulator + currentValue, 0))/tabnb.length;
    })
})();
