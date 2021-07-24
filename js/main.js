var contadores = ["prod13h", "prod14h", "prod15h", "prod16h", "prod17h", "prod18h", "prod19h", "prod20h",
"prod21h"
]
displayHour();
function displayHour() {    
    d = new Date();
    document.getElementById("timeText").innerText = d.getHours()+"h00";
}
setInterval(displayHour, 60000);

calculate()
contadores.forEach((element) => {
if (!window.localStorage.getItem(element)) {
    window.localStorage.setItem(element, 0)
}
document.getElementById(element).innerHTML = window.localStorage.getItem(element);
})

function copyText(text){
navigator.clipboard.writeText(text); 
}
function calculate(){
count=0
contadores.forEach((element) => {
    count+=parseInt(window.localStorage.getItem(element))
})
document.getElementById("txt_total").innerHTML = count;
}
function reset(){
contadores.forEach((element) => {
window.localStorage.setItem(element, 0)
document.getElementById(element).innerHTML = window.localStorage.getItem(element)
})
calculate();
}

function add(id) {
window.localStorage.setItem(id, parseInt(window.localStorage.getItem(id)) + 1)
document.getElementById(id).innerHTML = window.localStorage.getItem(id)
calculate();
}

function remove(id) {
if(parseInt(window.localStorage.getItem(id)) > 0){
    window.localStorage.setItem(id, parseInt(window.localStorage.getItem(id)) - 1)
    document.getElementById(id).innerHTML = window.localStorage.getItem(id)
}
calculate();
}