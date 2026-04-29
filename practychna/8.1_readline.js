const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function playGame() {
    let attempts = 0;
    let playing = true;

    console.log("Гра 'Вгадай число' почалася!");

    while (playing) {
        const guess = await new Promise(resolve => {
            rl.question("Введіть число від 1 до 100 (або 'exit' для виходу): ", resolve);
        });

        if (guess.toLowerCase() === 'exit') {
            console.log("Гру перервано.");
            break;
        }

        attempts++;

        if (Math.random() < 0.25) {
            console.log(`\n Ви вгадали! Кількість витрачених спроб: ${attempts}`);
            playing = false;
        } else {
            let hint = Math.random() < 0.5 ? "Більше" : "Менше";
            console.log(`Не вгадали. Загадане число ${hint}.\n`);
        }
    }

    rl.close();
}

playGame();