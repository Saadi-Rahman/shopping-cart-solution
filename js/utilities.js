
function updateQuantity(isIncrease, fieldId){
    const quantityField = document.getElementById(fieldId);
    const quantityNumberString = quantityField.value;
    const previousQuantity = parseInt(quantityNumberString);

    let newQuantity;
    if(isIncrease === true){
        newQuantity = previousQuantity + 1;
    }
    else {
        newQuantity = previousQuantity - 1;
    }
    quantityField.value = newQuantity;
    return newQuantity;
};


// get products price total element value
function getTextElementValueById(elementId){
    const elementTotal = document.getElementById(elementId);
    const elementTotalString = elementTotal.innerText;
    const newElementTotal = parseInt(elementTotalString);
    return newElementTotal;
};


// set price total element value
function setTextElementValueById(elementId, value){
    const calculationElement = document.getElementById(elementId);
    calculationElement.innerText = value;
}


// total price calculation
function calculateSubtotal(){
    const newPhonePriceTotal = getTextElementValueById("phone-price");
    const newCasePriceTotal = getTextElementValueById("case-price");

    // calculate subtotal
    const subtotal = newPhonePriceTotal + newCasePriceTotal;
    setTextElementValueById("sub-total", subtotal);

    // calculate tax
    const taxAmountString = (subtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById("tax-amount", taxAmount);

    // calculate finale total
    const finalTotal = subtotal + taxAmount;
    setTextElementValueById("finale-total", finalTotal);
};




