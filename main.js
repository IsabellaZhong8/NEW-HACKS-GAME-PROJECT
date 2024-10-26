const myImage = document.querySelector('img');

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a fraction with numerator and denominator from 1-10
function generateRandomFraction() {
    const numerator = getRandomInt(1, 10);
    const denominator = getRandomInt(1, 10);
    return { numerator, denominator };
}

// Function to add two fractions
function addFractions(fraction1, fraction2) {
    const numerator = (fraction1.numerator * fraction2.denominator) + (fraction2.numerator * fraction1.denominator);
    const denominator = fraction1.denominator * fraction2.denominator;

    // Simplify the fraction
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const commonDivisor = gcd(numerator, denominator);

    return {
        numerator: numerator / commonDivisor,
        denominator: denominator / commonDivisor
    };
}

// Function to ask the user a new question each time
function askQuestion() {
    // Generate two random fractions
    const fraction1 = generateRandomFraction();
    const fraction2 = generateRandomFraction();

    // Display the question to the user
    const userAnswer = prompt(`Add the fractions: ${fraction1.numerator}/${fraction1.denominator} + ${fraction2.numerator}/${fraction2.denominator}. Enter your answer in the form 'numerator/denominator':`);

    // Calculate the correct answer
    const correctAnswer = addFractions(fraction1, fraction2);
    const correctAnswerStr = `${correctAnswer.numerator}/${correctAnswer.denominator}`;

    // Check if the user's answer is correct
    if (userAnswer === correctAnswerStr) {
        alert("Correct! Well done!");
    } else {
        alert(`Incorrect. The correct answer is ${correctAnswerStr}.`);
    }
}

// Call the askQuestion function each time you want to ask a new question
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
        prompt = ''
        switch (topic) {
            case 'Fractions':
                prompt = '';
            case 'Divison':
                prompt = '';
            case 'Literacy':
                prompt = '';
            case 'Programming':
                prompt = '';
            default:
                throw new Error('This is not a valid topic!');
        }
    }

    show_order(customer) {
        const order_text = document.getElementById('order');
        let message = 'Can I get ';

        for (let i = 0; i < customer.order.length - 1; i++) {
            message += `${customer.order[i][0]} ${customer.order[i][1].name} and`;
        }
        order_text.innerHTML = message;
    }


}



class main {




}