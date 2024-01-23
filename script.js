function calculateCLTV() {
    var averageRevenue = document.getElementById('averageRevenue').value;
    var appointmentsPerYear = document.getElementById('appointmentsPerYear').value;
    var years = document.getElementById('years').value;

    var cltv = averageRevenue * appointmentsPerYear * years;
    document.getElementById('result').innerHTML = 'Customer Lifetime Value: $' + cltv.toFixed(2);
}
