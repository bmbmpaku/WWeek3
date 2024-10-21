async function fetchupgrades() {
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    console.log("HTTP response:", response);
    const data = await response.json();
    createupgrades(data[0]);
};
fetchupgrades();

localStorage.setItem("cookies", cookies)
localStorage.setItem("cookies", JSON.stringify(cookies));

let cookies = localStorage.setItem("cookies", cookies)||0

cookieDisplay.textContent = cookies;

const toppinglist = {
    toppingname:"Chocolate Chip", cost:15, cpsboost:5};
    {toppingname:"Skittles", cost:5, cpsboost:4};
    const biscoff = {toppingname:"Biscoff", cost:10, cpsboost:3};
    const Magicflour = {toppingname:"Magic Flour", cost:fetchupgrades.cost, cpsboost: 7};
    const doublejar = {JarName:"Small tin", cost:10, sizeby:2, bonus:1.2};
    }