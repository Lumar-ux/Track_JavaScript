/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // const day = document.getElementById("dob-day").value;
        // const month = document.getElementById("dob-month").value;
        // const year = document.getElementById("dob-year").value;
        // const date_today = new Date();
        // console.log(year)
        // console.log(month)
        // console.log(day)
        // console.log(date_today.getFullYear())
        // console.log(date_today.getMonth())
        // console.log(date_today.getDate())
        // // const age =  date_today.getFullYear() - year;
        // // const age_month = - month + date_today.getMonth();
        // // const age_day = day+date_today.getDay();
        // const age =  date_today.getFullYear()-year;
        // const age_month = date_today.getMonth();
        // const age_day = date_today.getDate();
        // console.log("Vous avez Âge :", age, age_month," mois ", age_day," Jour")
        // function getAge(birthDate) {
            const today = new Date();
            const birthYear = document.getElementById("dob-year").value;
            const birthMonth = document.getElementById("dob-month").value;
            const birthDay = document.getElementById("dob-day").value;
          
            let ageYear = today.getFullYear() - birthYear;
            let ageMonth = today.getMonth() - birthMonth;
            console.log(ageMonth)
            let ageDay = today.getDate() - birthDay;
          
            if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
              ageYear--;
              ageMonth += 12;
            }
            if (ageDay < 0) {
              const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
              ageMonth--;
              ageDay += daysInLastMonth;
            }
          ageMonth += 1;
          console.log(`J'ai ${ageYear} ans, ${ageMonth} mois et ${ageDay} jours.`);
          
})
})();
