let firstCurrency = document.getElementById('currency-one');
let secondCurrency = document.getElementById('currency-two');

let firstAmount = document.getElementById('amount-one');
let secondAmount = document.getElementById('amount-two');

let rateElement = document.getElementById('rate');

let swap = document.getElementById('swap');

function Calculate() {
    const currency1 = firstCurrency.value;
    const currency2 = secondCurrency.value;

    fetch(`https://v6.exchangerate-api.com/v6/334229dec27ab87b06cadab4/latest/${currency1}`)
        .then(response => response.json())
        .then((data) => {
            // console.log(data)
            let rate = data.conversion_rates[currency2];
            rateElement.innerText = `1 ${currency1}=${rate} ${currency2}`;

            secondAmount.value = (firstAmount.value * rate).toFixed(2);
        });
}

firstCurrency.addEventListener('change', Calculate);
secondCurrency.addEventListener('change', Calculate);
firstAmount.addEventListener('change', Calculate);
secondAmount.addEventListener('change', Calculate);

swap.addEventListener('click', () => {
    let temp = firstCurrency.value;
    firstCurrency.value = secondCurrency.value;
    secondCurrency.value = temp;
    Calculate();
})

Calculate();