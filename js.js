// document.getElementById('button2').setAttribute("disabled", "disabled");
// document.getElementById("button4").setAttribute("disabled", "disabled");
var theButton = document.getElementById("button1"); //defining  id button1
var total = document.getElementById("theTotal"); //defining  id total
var bonusButton = document.getElementById('activate_bonus');

theButton.addEventListener("click", sumPress); //once button one is pressed calling sumPress function
bonusButton.addEventListener("click", activateBonus);


var sum = 0; // setting sum at 0 for counter
var multiplier = 1;
var nextBonus = 10;

function sumPress()  //creating function sumPress
{
    sum = sum + multiplier;
    total.innerHTML = sum; //making sum and total =
    if (sum >= nextBonus)
    {
        bonusButton.removeAttribute("disabled");
    }
}

function activateBonus() {
    multiplier = multiplier * 2; // Bump up the multiplier
    // Set next bonus value
    switch (nextBonus) {
        case 10:
            nextBonus = 50;
            break;
        case 50:
            nextBonus = 100;
            break;
        case 100:
            nextBonus = 150;
            break;
        case 150:
            nextBonus = 200;
            break;

    }

    bonusButton.setAttribute("disabled", "disabled");
}
    // if (sum === 10) {
    //     document.getElementById('button2').removeAttribute("disabled");
    //
    // }
    //
    //
    // var theButton2 = document.getElementById("button2");
    // var total2 = document.getElementById("theTotal2"); ////second button that does the same thing as the first
    //
    // theButton2.addEventListener("click", sumPress2);
    // var sum2 = 0;



// function sumPress2() {
//     total.innerHTML += 2;
//     sum2+= 2;
//     total.innerHTML = sum2;
//
//     if (sum2===10){
//         document.getElementById("button4").removeAttribute("disabled");
//         document.getElementById('button2').setAttribute("disabled", "disabled");
//
//
//     }
// }
// var theButton4 = document.getElementById("button4");
// var total4 = document.getElementById("theTotal4"); ////second button that does the same thing as the first
//
// theButton4.addEventListener("click", sumPress4);
// var sum4 = 0;
// function sumPress4() {
//     total.innerHTML+=5;
//     sum4 += 5;
//     total4.innerHTML=sum4
// }
//
// var theButton3 = document.getElementById("button3");
// var total3 = document.getElementById("theTotal3"); // creating a reset button
//
// theButton3.addEventListener("click", sumPress3);// that when clicked sets value of the first two buttons back at 0
// var sum3 = 0;
//
// function sumPress3()
//
// {
//     a = 0;
//     document.getElementById('theTotal').innerHTML = a;
//     document.getElementById('theTotal2').innerHTML = a;
//     document.getElementById('theTotal4').innerHTML = a;
//     document.getElementById("Reset").innerHTML = a;
//
//
// }
//

// }


