total = localStorage["itemPrice"]

function load(){
    document.getElementsByClassName('cart-total-price')[0].innerText = 'RM' + total
    document.getElementsByClassName('cart-total-price')[1].innerText = 'RM' + total
}

function confirmFunction(){
    var cardNumber = document.getElementById("Card Number").value;
    var Name = document.getElementById("Name on Card").value;
    var Code = document.getElementById("Security Code").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("years").value;


    if(cardNumber != "" && Name != "" && Code != "" && month != "" && year != "" ){

        alert("Thanks For Your Purchase !");
    }
}