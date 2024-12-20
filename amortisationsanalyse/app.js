/* 1 уровень сложности: Level 1

а. Приведите пример использования амортизированного анализа в практике.


b. Написать код, который принимает на вход массив и число элементов,


и возвращает новый массив,который содержит все элементы исходного массива
и заданное число новых элементов. */


// a 

class PiggyBank {
    constructor() {
        this.coins = [];
        this.count = 0;
    }

    addCoin(coin) {
        this.coins.push(coin);
        this.count++;

        if (this.count % 10 === 0) {
            this.countCoins();
        }
    }

    countCoins() {
        let totalCoins = 0;
        for (let coin of this.coins) {
            totalCoins++;
        }
        console.log(`Total coins counted: ${totalCoins}`);
    }
}

let piggyBank = new PiggyBank();
for (let i = 1; i <= 25; i++) {
    piggyBank.addCoin(1);  
}

// b

const extendArray = (arr, n) => {
    const newArr = [...arr];
    
    for (let i = 0; i < n; i++) {
        newArr.push(`newElement${i + 1}`);
    }

    return newArr;
}

const originalArray = [1, 2, 3];



console.log(extendArray(originalArray, 7)); 