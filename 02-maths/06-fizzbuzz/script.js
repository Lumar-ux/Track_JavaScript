/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    for(let i=1;100>=i;i++){
        if(i%5==0&&i%3==0){
            console.log("fizzbuzz")
        }else if(i%5==0){
            console.log("buzz")
        }else if(i%3==0){
            console.log("fizz")
        }else{
            console.log(i);
        }
    }
})();
