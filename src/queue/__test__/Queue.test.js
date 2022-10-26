const Queue = require("../queue");


describe("Queue and it's operations", () => {
	let queue;
	beforeEach(() => {
		queue = new Queue(5)
	})
	it("Should be empty at start", () => {
		expect(queue.isEmpty()).toBeTruthy();
		expect(queue.peek()).toBe(null)
		expect(queue.front).toBe(0)
		expect(queue.rear).toBe(0)
	})

	it('Should add item at rear', () => {
		queue.enQueue(40);
		expect(queue.peek()).toBe(40)

		expect(queue.rear).toBe(1)
		expect(queue.front).toBe(0)
	})

	it('Should remove item at front', () => {
		queue.enQueue(40);
		queue.enQueue(50);
		queue.enQueue(60);

		expect(queue.peek()).toBe(40)
		expect(queue.rear).toBe(3)
		expect(queue.deQueue()).toBe(40);
		expect(queue.peek()).toBe(50)
		expect(queue.front).toBe(1)
		expect(queue.rear).toBe(3)
	})

 })