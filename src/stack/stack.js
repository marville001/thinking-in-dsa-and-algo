class Stack {
    constructor(size) {
        this.count = 0;
        this.items = [];
        this.size = size;
    }

    push(item) {
        if (this.isFull()) throw Error("OVERFLOW ERROR");

        this.items[this.count] = item;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) return null;

        const removedItem = this.items[this.count - 1];
        this.count--;

        return removedItem;
    }

    peek() {
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.size === this.count;
    }
}

module.exports = Stack;
