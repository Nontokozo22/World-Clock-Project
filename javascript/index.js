let brisbaneElement = document.querySelector("#brisbane");
let brisbaneDatElement = brisbaneElement.querySelector(".date");
let brisbaneTimeElement = brisbaneElement.querySelector(".time");

brisbaneDatElement.innerHTML = moment().format("dddd")