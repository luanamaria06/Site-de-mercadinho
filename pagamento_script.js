// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const paymentMethods = document.getElementsByName('payment-method');
    const cartaoForm = document.getElementById('cartao-form');
    const pixForm = document.getElementById('pix-form');
    const finalizarCompraBtn = document.getElementById('finalizar-compra');

    paymentMethods.forEach(method => {
        method.addEventListener('change', function () {
            if (this.value === 'cartao') {
                cartaoForm.style.display = 'block';
                pixForm.style.display = 'none';
            } else if (this.value === 'pix') {
                cartaoForm.style.display = 'none';
                pixForm.style.display = 'block';
            }
        });
    });
    finalizarCompraBtn.addEventListener('click', function () {
        const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;

        if (selectedMethod === 'cartao') {
            const cardName = document.getElementById('card-name').value;
            const cardNumber = document.getElementById('card-number').value;
            const expiryDate = document.getElementById('expiry-date').value;
            const cvv = document.getElementById('cvv').value;

            if (!cardName || !cardNumber || !expiryDate || !cvv) {
                alert('Por favor, preencha todos os campos do cartão.');
                return;}

            // Aqui você enviaria os dados do cartão para o servidor
            console.log('Dados do Cartão:');
            console.log('Nome no Cartão:', cardName);
            console.log('Número do Cartão:', cardNumber);
            console.log('Data de Validade:', expiryDate);
            console.log('CVV:', cvv);

            // Simulação de envio
            alert('Compra com cartão finalizada com sucesso!');
        } else if (selectedMethod === 'pix') {
            // pagamento via Pix
            console.log('Pagamento via Pix selecionado');
            alert('Pagamento via Pix iniciado. Por favor, finalize o pagamento com o QR code.');
        }
    });
});