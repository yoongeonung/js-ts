function logText<T>(text: T):T {
    console.log(text);
    return text;
}

logText<string>("hello");

interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T){
    text.length;
    return text;
}

logTextLength(10);

interface ShoppingItem {
    name: string,
    price: number,
    stock: number,
}

function getShoppingItemOption<T extends keyof ShoppingItem>(optionItem: T): T {
    return optionItem;
}

getShoppingItemOption("stock");