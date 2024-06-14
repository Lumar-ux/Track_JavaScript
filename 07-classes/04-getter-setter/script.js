/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        class Person{
            constructor(name,lastname){
                this.firstname=name;
                this.lastname=lastname;
            }
            get name(){
                return ("[firstname] [lastname]");
            }
            set name(newvalue){
                const tabname = newvalue.split(" ");
                this.firstname=tabname[0];
                this.lastname=tabname[1];
            }
        }
        const firstinst = new Person("Billie","Eilish")
        console.log(firstinst);
        firstinst.name = "Horty Eilish";
        console.log(firstinst);
    })
})();
