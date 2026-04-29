function playConsoleGame() {
    console.clear(); 
    console.log("%cГра 'Вгадай число' почалася! Вводьте числа у вікно, що з'являється.", "color: blue; font-weight: bold; font-size: 14px;");
    
    let attempts = 0;
    let playing = true;

    while (playing) {
        let guess = prompt("Ваш хід! Введіть число від 1 до 100:");
        
        if (guess === null) {
            console.log("%cГру перервано користувачем.", "color: red;");
            break; 
        }
        
        attempts++;
        console.log(`Спроба №${attempts}. Варіант: ${guess}`);

        if (Math.random() < 0.25) { 
            console.log(`%cВи вгадали! Кількість витрачених спроб: ${attempts}`, "color: green; font-size: 16px; font-weight: bold;");
            playing = false;
        } else {
            let hint = Math.random() < 0.5 ? "Більше" : "Менше";
            console.log(` Не вгадали. Загадане число ${hint}.`);
        }
    }
    
    console.log("Гру завершено.");
}

playConsoleGame();