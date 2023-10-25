
// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {

    // Input
    let x1 = +document.getElementById("x1-in").value;
    let x2 = +document.getElementById("x2-in").value;
    let y1 = +document.getElementById("y1-in").value;
    let y2 = +document.getElementById("y2-in").value;

    // Process
    let total1 = (y2 - y1);
    let total2 = (x2 - x1);

    // Output
document.getElementById("output1").innerHTML = total1;
document.getElementById("output2").innerHTML = total2;

}