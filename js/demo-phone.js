function updatePhoneQuantity(isIncrease){
    const phoneField = document.getElementById("phone-field");
    const phoneQuantityString = phoneField.value;
    const previousPhoneQuantity = parseInt(phoneQuantityString);

    let newPhoneQuantity;
    if(isIncrease === true){
        newPhoneQuantity = previousPhoneQuantity + 1;
    }
    else {
        newPhoneQuantity = previousPhoneQuantity - 1;
    }
    phoneField.value = newPhoneQuantity;
    return newPhoneQuantity;
};

// calculate total phone price
function updatePhonePrice(newPhoneQuantity){
    const newPhonePrice = newPhoneQuantity * 1219;
    const phonePriceElement = document.getElementById("phone-price");
    phonePriceElement.innerText = newPhonePrice;
}



// add event listner on phone plus btn
document.getElementById("btn-phone-plus").addEventListener("click", function(){
    const newPhoneQuantity = updatePhoneQuantity(true);

    updatePhonePrice(newPhoneQuantity);
});

// add event listner on phone minus btn
document.getElementById("btn-phone-minus").addEventListener("click", function(){
    const newPhoneQuantity = updatePhoneQuantity(false);

    updatePhonePrice(newPhoneQuantity);
});