function calculateSum() {
    const numbers = [
        document.getElementById('number1').value,
        document.getElementById('number2').value,
        document.getElementById('number3').value,
        document.getElementById('number4').value
    ].map(Number);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/sum', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('result').textContent = "Sum: " + response.sum;
        } else if (xhr.readyState === 4) {
            document.getElementById('result').textContent = 'Error: ' + xhr.status;
        }
    };
    xhr.send(JSON.stringify(numbers));
}
