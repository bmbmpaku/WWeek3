async function fetchupgrades() {
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    console.log("HTTP response:", response);
    const data = await response.json();
    createupgrades(data[0]);
};
fetchupgrades();

localStorage.setItem("cookies", cookies)

let cookies = localStorage.setItem("cookies", cookies)||0

cookieDisplay.textContent = cookies;