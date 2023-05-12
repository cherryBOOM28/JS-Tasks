function convertToTenge() {
    let dollarAmount = parseFloat(document.getElementById("dollarAmount").value);

    if (isNaN(dollarAmount)) {
        document.getElementById("result").innerText = "Please enter a valid dollar amount.";
        return;
    }

    let conversionRate = 448; 
    let tengeAmount = dollarAmount * conversionRate;

    document.getElementById("result").innerText = "Equivalent amount in Tenge: " + tengeAmount.toFixed(2);
}