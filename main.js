const myImage = document.querySelector('img');

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