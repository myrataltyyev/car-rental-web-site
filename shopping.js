var globalSubtotal = [0,0,0,0,0,0,0,0,0,0,0];

// 1st car calculation
function calculatePrice1() {
    var costDesc = document.getElementById("pricePerDay1").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days1");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price1").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[0] = total;
}

// 2nd car calculation
function calculatePrice2() {
    var costDesc = document.getElementById("pricePerDay2").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days2");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price2").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[1] = total;
}

// 3rd car calculation
function calculatePrice3() {
    var costDesc = document.getElementById("pricePerDay3").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days3");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price3").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[2] = total;
}

// 4th car calculation
function calculatePrice4() {
    var costDesc = document.getElementById("pricePerDay4").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days4");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price4").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[3] = total;
}

// 5th car calculation
function calculatePrice5() {
    var costDesc = document.getElementById("pricePerDay5").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days5");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price5").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[4] = total;
}

// 6th car calculation
function calculatePrice6() {
    var costDesc = document.getElementById("pricePerDay6").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days6");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price6").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[5] = total;
}

// 7th car calculation
function calculatePrice7() {
    var costDesc = document.getElementById("pricePerDay7").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days7");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price7").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[6] = total;
}

// 8th car calculation
function calculatePrice8() {
    var costDesc = document.getElementById("pricePerDay8").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days8");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price8").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[7] = total;
}

// 9th car calculation
function calculatePrice9() {
    var costDesc = document.getElementById("pricePerDay9").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days9");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price9").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[8] = total;
}

// 10th car calculation
function calculatePrice10() {
    var costDesc = document.getElementById("pricePerDay10").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days10");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price10").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[9] = total;
}

// 11th car calculation
function calculatePrice11() {
    var costDesc = document.getElementById("pricePerDay11").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var dropdown = document.getElementById("days11");
    var days = dropdown.options[dropdown.selectedIndex].text;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price11").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[10] = total;
}


function calculateTotal() {
    var subtotal = 0;
    
    for(var i = 0; i < 11; i++){
        subtotal += globalSubtotal[i];
    }
    
    var total = subtotal + subtotal * 0.13;
    
    document.getElementById("subtotal").innerHTML = "$" + subtotal;
    document.getElementById("total").innerHTML = "$" + total;
}
