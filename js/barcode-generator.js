document.addEventListener('DOMContentLoaded', () => {
    const barcodeInput = document.getElementById('barcodeInput');
    const barcodeOutput = document.getElementById('barcodeOutput');
    const formButton = document.querySelector('.form-button');

    formButton.addEventListener('click', (event) => {
        event.preventDefault();
        const inputData = barcodeInput.value;
        if (inputData) {
            generateBarcode(inputData);
        } else {
            alert('Veuillez entrer des données pour générer un code bar.');
        }
    });

    function generateBarcode(data) {
        // Clear previous barcode
        barcodeOutput.innerHTML = '';

        // Generate barcode using a library or custom logic
        const barcode = document.createElement('div');
        barcode.textContent = `Code bar: ${data}`;
        barcodeOutput.appendChild(barcode);
    }
});
