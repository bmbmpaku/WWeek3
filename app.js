//Fetch upgrades from API 
const Upgrades = async()=>{
const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
const data = await response.json();
console.log(data);
};
Upgrades().then(data=> console.log('resolved:',data));

async function fetchupgrades() {
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    console.log("HTTP response:", response);
    const data = await response.json();
    

    createupdates(data[0]);
}
function createupdates(upgrades){
    for(let i = 0; i < upgrades.length; i = i +1){
        console.log(i)
        const para = document.createElement('p')
        const btn = document.createElement('button')
        para.textContent = upgrades[i].name + "-" + upgrades[i].cost + "-Gives" +upgrades[i].increase
        btn.textContent = "Buy"
        btn.addEventListener("click", function(){
            cookies = cookies -upgrades[i].cost;
            cps = cps + upgrades[i].increase;
            console.log("cookies: ", cookies, "cps: ", cps)
        })
        para.append(btn)
        CSSContainerRule.append(para)
    }
}
fetchupgrades();

//DOM Nodes
const getcookiesBtn = document.getElementById("getcookie-btn");
const getskittlesBtn = document.getElementById("skittles");
const getmagicflourBtn = document.getElementById("magic-flour");
const getbiscoffBtn = document.getElementById("biscoff");
const cookieDisplay = document.getElementById("cookie-disp");
const cpsDisplay = document.getElementById("cps-disp");
const doublejarBtn = document.getElementById("doublejar-btn");
const gettoppingsBtn = document.getElementById("gettoppings-btn");
const cookiejar = document.getElementById("cookiejar-disp");
const startgame = document.getElementById("startgame");
const toppingsdisplay = document.getElementById("toppings");
const darkmodetog = document.getElementById("dark_mode");


//Game Logic
// Every second increase cookies by cps 
// The cookie jar can only contain a set amount of cookies. 
//If your cookies exceed the size of the jar, you loose. 
//Game(cookie counter) restarts and shows your last stats or high score. 
//Upgrade the cps by adding toppings to your cookies. #fetch names of cookie topping.

//Game State
let cookies = 0;
let cps = 1; 
let jarsize = 200;
let toppings = 0;
cookiejar.textContent = jarsize; //Displays updated jarsize
cpsDisplay.textContent = cps; //Displays updated cps

//Local Storage
localStorage.setItem("cookies", cookies);
localStorage.setItem("cps", cps);
localStorage.setItem("jarsize", jarsize);
localStorage.setItem("toppings", toppings);
console.log (cookies);
console.log (cps);
console.log (jarsize);
console.log (toppings);

//Game Start Functions
function gamestart(){
    setInterval(function (){
        cookies = cookies + cps;
        cookieDisplay.textContent = cookies;
        cps.textContent = cps;
        cookiejar.textContent= jarsize;
    },1000);
};

//Start Game
//Get Cookies every second
startgame.addEventListener("click", gamestart);


//Get a cookie when get cookie button is clicked
getcookiesBtn.addEventListener("click", function(){
    cookies = cookies + 1;
    cookieDisplay.textContent = cookies;
});

//Get Toppings; different toppings costs vary, 
//Toppings give users different boosts to your cps,
//Topping Prices
const chocchiptopping = {toppingname:"Chocolate Chip", cost:10, cpsboost:5};
const skittlestopping = {toppingname:"Skittles", cost:10, cpsboost:4};
const biscoff = {toppingname:"Biscoff", cost:10, cpsboost:3};
const Magicflour = {toppingname:"Magic Flour", cost:fetchupgrades.cost, cpsboost: 7};
const doublejar = {JarName:"Small tin", cost:10, sizeby:2, bonus:1.2};

//Upgrade
gettoppingsBtn.addEventListener("click", function(){
    //check price & affordability
    if (cookies >= chocchiptopping.cost) {
        toppings =toppings + 1;
        cps = cps + chocchiptopping.cpsboost;
        cookies = cookies - chocchiptopping.cost;
        cpsDisplay.textContent=cps;
        toppingsdisplay.textContent =toppings;
    //Add Local Storage
    }else {alert("whomp!whomp!!")}
});
getmagicflourBtn.addEventListener("click", function(){
    //check price & affordability
    if (cookies >= Magicflour.cost) {
        toppings =toppings + 1;
        cps = cps + Magicflour.cpsboost;
        cookies = cookies - Magicflour.cost;
        cpsDisplay.textContent=cps;
        toppingsdisplay.textContent =toppings;
    //Add Local Storage
    }else {alert("whomp!whomp!!")}
});
getbiscoffBtn.addEventListener("click", function(){
    //check price & affordability
    if (cookies >= biscoff.cost) {
        toppings =toppings + 1;
        cps = cps + biscoff.cpsboost;
        cookies = cookies - biscoff.cost;
        cpsDisplay.textContent=cps;
        toppingsdisplay.textContent =toppings;
    //Add Local Storage
    }else {alert("whomp!whomp!!")}
});
//Get a bigger Jar 
doublejarBtn.addEventListener("click", function(){
    if (toppings>= doublejar.cost){
        jarsize = jarsize * doublejar.sizeby;
        toppings = toppings - doublejar.cost;
        cookies = cookies * doublejar.bonus;
        toppingsdisplay.textContent = toppings;
        cookiejar.textContent= jarsize;
    }
    else if (toppings <= doublejar.cost){
        alert ("buy more toppings to unclock larger jars")
    }else {alert("whomp!whomp!!")}
});

//Game over
function gameover(){
if (cookies >= jarsize){
    alert("You broke the cookie Jar");
    cookies = 0;
    cps= 1;
    jarsize = 200;
    toppings=0;
    removeEventListener
}
};
setInterval(gameover,100)
console.log(cookies);
console.log(cookieDisplay);
console.log(cpsDisplay);
console.log(cps);

// Function to view local storage
function handleLocalStorageChange(event) {
    if (event.key === "cookies") {
      const newValue = event.newValue;
      console.log(`Local storage cookies changed to: ${newValue}`);
    }
  };
  window.addEventListener("storage", handleLocalStorageChange);

  //Dark Mode
  
function darkmode(){ 
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches) {
  document.body.classList.toggle("light-theme");
} else {
  document.body.classList.toggle("dark-theme");
}}
darkmodetog.addEventListener("click", darkmode);