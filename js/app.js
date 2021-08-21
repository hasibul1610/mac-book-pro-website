//Function to Minimize Calculation
function calculateTotal() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceTotal = parseFloat(bestPrice.innerText);

    const memoryCost = document.getElementById('memory-cost');
    const memoryCostTotal = parseFloat(memoryCost.innerText);

    const storageCost = document.getElementById('storage-cost');
    const storageCostTotal = parseFloat(storageCost.innerText);

    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostTotal = parseFloat(deliveryCost.innerText);

    const totalPrice = document.getElementById('total-price');
    let totalPriceValue = totalPrice.innerText;
    totalPriceValue = bestPriceTotal + memoryCostTotal + storageCostTotal + deliveryCostTotal;
    totalPrice.innerText = totalPriceValue;

    const finalTotal = document.getElementById('final-total');
    let finatTotalValue = finalTotal.innerText;
    finatTotalValue = bestPriceTotal + memoryCostTotal + storageCostTotal + deliveryCostTotal;
    finalTotal.innerText = finatTotalValue;
}

//Function To Minimize Zero Cost Items
function zeroCost(product) {
    const memoryCost = document.getElementById(product + '-cost');
    memoryCost.innerText = 0;
    calculateTotal();
}
//Function To Minimize 180 Cost Items
function oneEightyCost(product) {
    const memoryCost = document.getElementById(product + '-cost');
    memoryCost.innerText = 180;
    calculateTotal();
}

//click Handler for memory-8gb
document.getElementById('memory-8gb').addEventListener('click', function () {
    zeroCost('memory');
});

//click Handler for memory-16gb
document.getElementById('memory-16gb').addEventListener('click', function () {
    oneEightyCost('memory');
});

//Click Handler for storage-256gb
document.getElementById('storage-256gb').addEventListener('click', function () {
    zeroCost('storage');
});

//Click Handler for storage-512gb
document.getElementById('storage-512gb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
    calculateTotal();
});

//Click Handler for storage-1tb
document.getElementById('storage-1tb').addEventListener('click', function () {
    oneEightyCost('storage');
});

//Click Handler for Delivery Charge
document.getElementById('free-delivery').addEventListener('click', function () {
    zeroCost('delivery');
});

//Click Handler for Delivery Charge
document.getElementById('premium-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
    calculateTotal();
});

//Promo Code Apply
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;

    const totalPrice = document.getElementById('total-price');
    const totalPriceValue = parseFloat(totalPrice.innerText);

    const finalPrice = document.getElementById('final-total');
    const finalTotalValue = parseFloat(finalPrice.innerText);
    console.log(finalTotalValue);

    if (promoInputValue.toLowerCase() == 'stevekaku') {
        const totalAfterDiscount = (totalPriceValue / 100) * 80;
        finalPrice.innerText = totalAfterDiscount;
        promoInput.value = '';
    } else {
        alert("Code Doesn't Match");
        promoInput.value = '';
    }
});