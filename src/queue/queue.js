
class Queue{

	constructor(size) {
		this.size = size;
		this.items = [];
		this.front = 0;
		this.rear = 0;
	}

	enQueue(item) {
		if (this.isFull()) 
			throw Error("OVERFLOW ERROR");
		
		this.items[this.rear] = item;
		this.rear++;
	}
	
	deQueue() {
		if (this.isEmpty()) 
			throw Error("UNDERFLOW ERROR");
		
		const removedItem = this.items[this.front];
		this.front++;
		return removedItem;
	}

	isEmpty() {
		return (this.front === 0 && this.rear === 0)
	}

	isFull() {
		return (this.front === 0 && this.rear === this.size - 1);
	}

}

module.exports = Queue;