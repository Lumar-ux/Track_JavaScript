/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        class Animal {
            sayHello() {
                return `${this.constructor.greeting}! I'm ${this.name}!`;
            }
        }
        class Dog extends Animal{
            static greeting = "Hello";
            constructor(name){
                super();
                this.name=name;
            }
        }
        class Cat extends Animal{
            static greeting = "Hello";
            constructor(name){
                super();
                this.name=name;
            }
        }
        const newDog = new Dog("Billie");
        const newCat = new Cat("Speed");
        console.log(newDog.sayHello())
        console.log(newCat.sayHello())
    });
})();
