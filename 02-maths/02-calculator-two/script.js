/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    const performOperation = operation => {
        let nb1="";
        let nb2="";
        let res = "";
            console.log(typeof(operation))
            console.log(operation)
            switch (operation) {
                case "addition":
                    nb1 = document.getElementById("op-one").value;
                    nb2 = document.getElementById("op-two").value;
                    res = parseInt(nb1) + parseInt(nb2);
                    alert(res);
                    break;
                case "substraction":
                    nb1 = document.getElementById("op-one").value;
                    nb2 = document.getElementById("op-two").value;
                    res = parseInt(nb1) - parseInt(nb2);
                    alert(res);
                    break;
                case "multiplication":
                    nb1 = document.getElementById("op-one").value;
                    nb2 = document.getElementById("op-two").value;
                    res = parseInt(nb1) * parseInt(nb2);
                    alert(res);
                    break;
                default:
                    nb1 = document.getElementById("op-one").value;
                    nb2 = document.getElementById("op-two").value;
                    res = parseInt(nb1) / parseInt(nb2);
                    alert(res);
            };
    };
    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
