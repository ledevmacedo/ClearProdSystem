var counters = ["prod0h","prod1h","prod2h","prod3h","prod4h","prod5h","prod6h","prod7h","prod8h","prod9h","prod10h","prod11h","prod12h","prod13h", "prod14h", "prod15h", "prod16h", "prod17h", "prod18h", "prod19h", "prod20h","prod21h","prod22h","prod23h"
]
onLoad();
function onLoad() {
    counters.forEach((element) => {
        if (!window.localStorage.getItem(element)) {
            window.localStorage.setItem(element, 0)
        }
    })
    prodId = getHourTemplate();
    document.getElementById("localProd").innerHTML = window.localStorage.getItem(prodId);
    displayHour();
    calculate();
    setInterval(displayHour, 60000);
    setInterval(removeAlerts, 15000);
}
function removeAlerts(){
    document.getElementById("alert").style.display = "none";
}
function displayHour() {
    date = new Date();
    prodId = getHourTemplate();
    calculate();
    document.getElementById("localProd").innerHTML = window.localStorage.getItem(prodId);
    document.getElementById("timeText").innerText = date.getHours() + "h00";
}
function copyText(text) {
    navigator.clipboard.writeText(text);
}
function calculate() {
    count = 0;
    counters.forEach((element) => {
        count += parseInt(window.localStorage.getItem(element));
    })
    document.getElementById("txt_total").innerHTML = count;
}
function reset() {
    counters.forEach((element) => {
        window.localStorage.setItem(element, 0);
    })
    document.getElementById("localProd").innerHTML = 0;
    calculate();
}
function add() {
    prodId = getHourTemplate();
    document.getElementById("timeText")
    window.localStorage.setItem(prodId, parseInt(window.localStorage.getItem(prodId)) + 1)
    document.getElementById("localProd").innerHTML = window.localStorage.getItem(prodId)
    calculate();
}
function remove() {
    prodId = getHourTemplate();
    if (parseInt(window.localStorage.getItem(prodId)) > 0) {
        window.localStorage.setItem(prodId, parseInt(window.localStorage.getItem(prodId)) - 1)
        document.getElementById("localProd").innerHTML = window.localStorage.getItem(prodId)
    }
    calculate();
}
function getHourTemplate() {
    date = new Date();
    hour = date.getHours()
    prodId = `prod${hour}h`
    return prodId
}
function getProductivity(){
    prodHour = parseInt(document.getElementById("prodHours").value);
    document.getElementById("input").value = window.localStorage.getItem(counters[prodHour - 1]);
    calculate();
}
function setProductivity(){
    prodHour = parseInt(document.getElementById("prodHours").value);
    input = parseInt(document.getElementById("input").value);
    prodId = counters[prodHour - 1];
    window.localStorage.setItem(prodId, input)
    calculate();
    document.getElementById("alert").style.display = "block";
}