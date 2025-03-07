function calculateRCM() {
    let ar90 = parseFloat(document.getElementById("ar90").value) || 0;
    let totalAr = parseFloat(document.getElementById("totalAr").value) || 0;
    let dailyCharges = parseFloat(document.getElementById("dailyCharges").value) || 0;
    let deniedClaims = parseFloat(document.getElementById("deniedClaims").value) || 0;
    let totalClaims = parseFloat(document.getElementById("totalClaims").value) || 0;

    let arAging = totalAr > 0 ? (ar90 / totalAr * 100).toFixed(2) + '%' : 'N/A';
    let dar = dailyCharges > 0 ? (totalAr / dailyCharges).toFixed(2) + ' days' : 'N/A';
    let denialRate = totalClaims > 0 ? (deniedClaims / totalClaims * 100).toFixed(2) + '%' : 'N/A';

    document.getElementById("results").innerHTML = `
        <p><strong>A/R Aging (90+ Days %):</strong> ${arAging}</p>
        <p><strong>Days in A/R (DAR):</strong> ${dar}</p>
        <p><strong>Denial Rate:</strong> ${denialRate}</p>
    `;
}

// Function to Download Report as PDF
function downloadReport() {
    let email = document.getElementById("email").value;
    let results = document.getElementById("results").innerText;

    if (!email) {
        alert("Please enter your email before downloading the report.");
        return;
    }

    let doc = new jsPDF();
    doc.text("RCM Health Report", 20, 20);
    doc.text("Email: " + email, 20, 30);
    doc.text(results, 20, 50);
    doc.save("RCM_Health_Report.pdf");
}
