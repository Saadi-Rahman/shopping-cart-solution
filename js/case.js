// calculate total case price
function updateCasePrice(newCaseQuantity){
    const newCasePrice = newCaseQuantity * 59;
    const casePriceElement = document.getElementById("case-price");
    casePriceElement.innerText = newCasePrice;
};



// add event listner on case plus btn
document.getElementById("btn-case-plus").addEventListener("click", function(){
    const newCaseQuantity = updateQuantity(true, "case-field");

    updateCasePrice(newCaseQuantity);
    calculateSubtotal();
});

// add event listner on case minus btn
document.getElementById("btn-case-minus").addEventListener("click", function(){
    const newCaseQuantity = updateQuantity(false, "case-field");

    updateCasePrice(newCaseQuantity);
    calculateSubtotal();
});
