/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        const text = document.getElementById("year").value;
        const monthyear = ["", "Junary", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
        let Monthnb=1;
        let nbi = 1;
        while(Monthnb>=1&&Monthnb<=12){
            while (nbi>=1&&nbi<=31){
                let vend13 = new Date(monthyear[Monthnb]+nbi+", "+text);
                let jourSemaine = vend13.getDay();
                if(jourSemaine==5&&nbi==13){
                    console.log(nbi+" "+monthyear[Monthnb]+" "+text)
                }
                nbi++;
            }
            Monthnb++;
            nbi=1;
        }
    })
})();
