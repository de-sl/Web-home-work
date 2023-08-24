function app() {
    // Ввод данных
    //let x = parseInt(prompt("Введите х"))
    let x = parseInt(document.getElementById('x').value)

    if (x === 0) {
        document.getElementById('message').innerText = "x = 0"
    }
   
    // Логика
    const result = x + x


    //Вывод данных
    //alert(`Квадрат х = ${result}`)
    document.getElementById('result').innerText = result
}

function weight() {
    //Ввод значений
    var bmi
    let category
    let kg = parseInt(document.getElementById('weight').value)
    let sm = parseInt(document.getElementById('height').value) / 100
    if (kg < 1 || sm < 1) {
        alert ("Введено неверное значение массы или роста")
        document.getElementById('weight').value = " "
        document.getElementById('height').value = " "
        location.reload()
    }
    //Подсчеты
    bmi = (kg / (sm**2)).toFixed(1)
    
   
    // Вывод данных
    document.getElementById('result').innerText = bmi

    if( bmi < 18.5 ){
        category = "Недостаток веса 😒";
    }
    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Вес в норме 😍";
    }
    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "Избыточный вес 😮";
    }
    else if(bmi > 30) {
        category = "Ожирение 😱";
    }
    document.getElementById("message").innerText = category;
}