function hitung() {
    var operator = document.getElementById('operator').value;
    var nilai1 = parseFloat(document.getElementById('nilai1').value);
    var nilai2 = parseFloat(document.getElementById('nilai2').value);

    var hasil;
    switch(operator) {
        case '+':
            hasil = nilai1 + nilai2;
            break;
        case '-':
            hasil = nilai1 - nilai2;
            break;
        case '*':
            hasil = nilai1 * nilai2;
            break;
        case '/':
            if (nilai2 !== 0) {
                hasil = nilai1 / nilai2;
            } else {
                document.getElementById('hasil').innerText = "Error: Pembagian dengan nol.";
                return;
            }
            break;
        default:
            document.getElementById('hasil').innerText = "Operator tidak valid.";
            return;
    }

    document.getElementById('hasil').innerText = "Hasil " + operator + " adalah: " + hasil;
}
