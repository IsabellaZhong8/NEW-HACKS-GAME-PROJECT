

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

    tell_order() {
        const order_text = document.getElementById('order');
        let message = 'Can I get ';
        let add = ' and ';
        const entries = Array.from(this.order.entries()); // Convert Map to array of entries
        const lastIndex = entries.length - 1;

        for (let i = 0; i < entries.length; i++) {
            const [foodItem, quantity] = entries[i];
            const plural = quantity > 1 ? 's' : '';

            if (i === lastIndex - 1) {
                add = ' and '; // Change to 'and' for the last two items
            } else if (i === lastIndex) {
                add = ''; // No additional 'and' for the last item
            }

            message += `${quantity} ${foodItem.food_name}${plural}${add} `;
        }

        order_text.innerHTML = message.trim() + '?';
    }

}


const FOODS = [
    new Food('muffin', 1.25),
    new Food('cake', 8.50),
    new Food('pumpkin pie', 10),
    new Food('coookie', 2.4)
]

class Game {
    show_learning_prompt(topic) {
        prompt = ''
        switch (topic) {
            case 'Fractions':
                prompt = '';
                break;
            case 'Divison':
                prompt = '';
                break;
            case 'Literacy':
                prompt = '';
                break;
            case 'Programming':
                prompt = '';
                break;
            default:
                throw new Error('This is not a valid topic!');
        }
    }




}



class Main {
    run() {
        const num_foods_in_order = 3;
        let orders = new Map();
        let ran_quantity = 0;
        let ran_food = 0;

        for (let i = 0; i < num_foods_in_order; i++) {
            ran_quantity = Math.floor(Math.random() * 5) + 1;
            ran_food = Math.floor(Math.random() * FOODS.length);

            const foodItem = FOODS[ran_food];

            if (orders.has(foodItem)) {
                orders.set(foodItem, orders.get(foodItem) + ran_quantity);
            } else {
                orders.set(foodItem, ran_quantity);
            }
        }

        const customer = new Customer('Joe', orders);


        customer.tell_order();

    }


}

new Main().run()