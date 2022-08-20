
// calculate total phone price
function updatePhonePrice(newPhoneQuantity){
    const newPhonePrice = newPhoneQuantity * 1219;
    const phonePriceElement = document.getElementById("phone-price");
    phonePriceElement.innerText = newPhonePrice;
};



// add event listner on phone plus btn
document.getElementById("btn-phone-plus").addEventListener("click", function(){
    const newPhoneQuantity = updateQuantity(true, "phone-field");

    updatePhonePrice(newPhoneQuantity);
    calculateSubtotal();
});

// add event listner on phone minus btn
document.getElementById("btn-phone-minus").addEventListener("click", function(){
    const newPhoneQuantity = updateQuantity(false, "phone-field");

    updatePhonePrice(newPhoneQuantity);
    calculateSubtotal();
});