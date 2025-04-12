document.addEventListener("DOMContentLoaded", function () {
    // Get all download buttons
    const downloadButtons = document.querySelectorAll(".download-btn");

    // Function to download certificate PDF
    function downloadCertificate(event) {
        event.preventDefault();
        const pdfUrl = event.currentTarget.getAttribute("href");

        console.log("Downloading certificate: " + pdfUrl);

        // Create an anchor element for downloading
        const a = document.createElement("a");
        a.href = pdfUrl;
        a.setAttribute("download", pdfUrl.split('/').pop()); // Ensure file downloads with correct name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    // Attach event listeners to download buttons
    downloadButtons.forEach(button => button.addEventListener("click", downloadCertificate));
});
