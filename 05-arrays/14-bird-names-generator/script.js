/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        const birds = [
            { name: "mouette", fem: true },
            { name: "corbeau" },
            { name: "mésange", fem: true },
            { name: "hibou" },
            { name: "buse", fem: true },
            { name: "pigeon" },
            { name: "pie", fem: true },
            { name: "vautour" },
            { name: "faucon" },
            { name: "rouge-gorge" },
            { name: "tourterelle", fem: true },
            { name: "corneille", fem: true },
        ];
        const adjectives = new Set([
            "cendré",
            "huppé",
            "chantant",
            "hurlant",
            "perché",
            "grand",
            "petit",
            "bleu",
            "pantelant",
            "tangent",
            "arboré",
        ]);
        let Aleatoirebird = Math.floor(Math.random() * birds.length);
        let Aleatoireadj = Math.floor(Math.random() * adjectives.size);
        let con_set= Array.from(adjectives);
        if(birds[Aleatoirebird].fem){
            document.getElementById("target").textContent="La "+birds[Aleatoirebird].name+" "+con_set[Aleatoireadj]+"e";
        }else{
            document.getElementById("target").textContent="Le "+birds[Aleatoirebird].name+" "+con_set[Aleatoireadj];
        }
    });
})();
