// import Stack from "../stack.js"
const Stack = require("../stack");

describe("Implementing stack and its operations", () => {
    let stack;

    beforeEach(() => {
        stack = new Stack(5);
    });

    // beforeAll(() => {
    // 	stack = new Stack(5)
    // })

    test("Stack should be empty", () => {
        expect(stack.count).toBe(0);
    });

    test("Adding item to stack", () => {
        stack.push(20);

        expect(stack.count).toBe(1);
        expect(stack.peek()).toBe(20);
    });

    it("Should return null while removing from empty stack", () => {
        expect(stack.pop()).toBe(null);
    });

    it("Should remove and  return item from stack", () => {
        stack.push(30);
        stack.push(40);
        stack.push(50);
        expect(stack.pop()).toBe(50);
        expect(stack.count).toBe(2);
    });

    it("Should not insert on full stack. Throw 'OVERFLOW ERROR'", () => {
        stack.push(30);
        stack.push(40);
        stack.push(50);
        stack.push(60);
        stack.push(70);

        try {
            stack.push(80);
        } catch (e) {
            expect(e.message).toBe("OVERFLOW ERROR");
        }
    });

    it("Shoould be empty at start and not full", () => {
        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.isFull()).toBeFalsy();
    });
});
