/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let first_obj={
            lastname:"Sylvie",
            fistname:"Pierre",
            age:28,
            city:"Boston",
            country:"USA"
        }
        console.log(first_obj)
    });
})();
