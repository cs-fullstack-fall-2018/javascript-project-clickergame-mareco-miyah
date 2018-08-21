var theButton = document.getElementById("button1"); //defining  id button1
var total = document.getElementById("theTotal"); //defining  id total
document.getElementById('button2').setAttribute("disabled", "disabled");

theButton.addEventListener("click", sumPress); //once button one is pressed calling sumPress function
var sum = 0; // setting sum at 0 for counter

function sumPress()  //creating function sumPress
{
    total.innerHTML += 1; //adding one to the total every cycle
    sum += 1; //adding one to the sum every cycle
    total.innerHTML = sum; //making sum and total =
    if (sum === 10) {
        document.getElementById('button2').removeAttribute("disabled");
    }



    var theButton2 = document.getElementById("button2");
    var total2 = document.getElementById("theTotal2"); ////second button that does the same thing as the first

    theButton2.addEventListener("click", sumPress2);
    var sum2 = 0;


    function sumPress2() {
        total2.innerHTML += 1;
        sum2 += 1;
        total2.innerHTML = sum2;
    }


    var theButton3 = document.getElementById("button3");
    var total3 = document.getElementById("theTotal3"); // creating a reset button

    theButton3.addEventListener("click", sumPress3);// that when clicked sets value of the first two buttons back at 0
    var sum3 = 0;

    function sumPress3() {
        a = 0;
        document.getElementById('theTotal').innerHTML = a;
        document.getElementById('theTotal2').innerHTML = a;
        document.getElementById("Reset").innerHTML = a;

    }
}