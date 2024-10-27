const myImage = document.querySelector('img');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomFraction() {
    const numerator = getRandomInt(1, 10);
    const denominator = getRandomInt(1, 10);
    return { numerator, denominator };
}

function addFractions(fraction1, fraction2) {
    const numerator = (fraction1.numerator * fraction2.denominator) + (fraction2.numerator * fraction1.denominator);
    const denominator = fraction1.denominator * fraction2.denominator;

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const commonDivisor = gcd(numerator, denominator);

    return {
        numerator: numerator / commonDivisor,
        denominator: denominator / commonDivisor
    };
}

function askQuestion() {
    const fraction1 = generateRandomFraction();
    const fraction2 = generateRandomFraction();
    const userAnswer = prompt(`The customer wants: ${fraction1.numerator}/${fraction1.denominator} of an apple pie + ${fraction2.numerator}/${fraction2.denominator} of a blueberry pie. How much pie do they want in total?':`);
    
    const correctAnswer = addFractions(fraction1, fraction2);
    const correctAnswerStr = `${correctAnswer.numerator}/${correctAnswer.denominator}`;

    if (userAnswer === correctAnswerStr) {
        alert(`Correct! The customer wants ${correctAnswerStr} pie in total.`);
        money = money + 1
    } else {
        alert(`Incorrect. The customer wants ${correctAnswerStr} pie in total.`);
    }
}
askQuestion();

myImage.onClick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "https://iili.io/2qSvw7a.md.png") {
        myImage.setAttribute("src", "https://iili.io/2qSvw7a.md.png");
    } else {
        myImage.setAttribute("src", "https://iili.io/2qSr5Rn.md.png");
    }
};

class Food {
    constructor(food_name, price) {
        this.food_name = food_name;
        this.price = price;
    }

}


class Customer {
    constructor(first_name, order) {
        this.first_name = first_name;
        this.order = order;
    }

}


class Game {
    show_learning_prompt(topic) {
        let prompt = '';
        switch (topic) {
            case 'Fractions':
                prompt = 'Let’s explore fractions together!';
                break;
            case 'Division':
                prompt = 'Let’s dive into division!';
                break;
            case 'Literacy':
                prompt = 'Ready to boost your literacy skills?';
                break;
            case 'Programming':
                prompt = 'Time to code and learn programming!';
                break;
            default:
                throw new Error('This is not a valid topic!');
        }
        return prompt;
    }
}

    show_order(customer); {
        const order_text = document.getElementById('order');
        let message = 'Can I get ';

        for (let i = 0; i < customer.order.length - 1; i++) {
            message += `${customer.order[i][0]} ${customer.order[i][1].name} and`;
        }
        order_text.innerHTML = message;
    }



class main {




}


/*Nav bar*/
let list = document.querySelectorAll(".navigation li");
list[0].classList.add("active");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));