

const cookieButton = document.querySelector(".js-button");
const output = document.querySelector(".js-output");

function clearContainer() {
    output.textContent = "";
}

// Configure Button

cookieButton.addEventListener("click", function(event) {
    clearContainer();
    getFortune();
})

// Configure Fetch

function returnFortune(dataObject) {
    console.log(`return string: ${dataObject.fortune}`)
    return dataObject.fortune;
}

function renderToPage(fortune) {
    let p = document.createElement("p");
    p.textContent = fortune;
    output.appendChild(p);
}

function getFortune() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://yerkee.com/api/fortune'
    fetch(proxyUrl + targetUrl)
        .then(r => r.json())
        .then(returnFortune)
        .then(renderToPage)
}







