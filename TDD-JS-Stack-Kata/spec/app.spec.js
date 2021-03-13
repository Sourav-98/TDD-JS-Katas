const Stack = require('../app');

describe('stack content properties', function(){
    it('shows that the stack is empty by default', ()=>{
        let stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    });
    it('shows that the stack is not empty when there is one data', ()=>{
        let stack = new Stack();
        let element1 = 10;
        stack.stackData = [element1];
        expect(stack.isEmpty()).toBe(false);
    });
    it('shows the size of the stack as 0 when there is 0 data', ()=>{
        let stack = new Stack();
        // stack.stackData = [];
        expect(stack.getSize()).toBe(0);
    });
    it('shows the size of the stack as 1 when there is 1 data', ()=>{
        let stack = new Stack();
        let element1 = 12;
        stack.stackData = [element1];
        expect(stack.getSize()).toBe(1);
    });
    it('shows the size of the stack as 2 when there are 2 data', ()=>{
        let stack = new Stack();
        let element1 = 45, element2 = 56;
        stack.stackData = [element1, element2];
        expect(stack.getSize()).toBe(2);
    });
    it('shows the top data as undefined of an empty stack', ()=>{
        let stack = new Stack();

        expect(stack.getTopOfStack()).toBe(undefined);
    });
    it('shows the top data as 1 when the stack is [65]', ()=>{
        let stack = new Stack();
        let element1 = 65;
        stack.stackData = [element1];
        expect(stack.getTopOfStack()).toBe(element1);
    });
    it('shows the top data as 1 when the stack is [65, 24]', ()=>{
        let stack = new Stack();
        let element1 = 45, element2 = 56;
        stack.stackData = [element1, element2];
        expect(stack.getTopOfStack()).toBe(element1);
    });
});

describe('stack push function', ()=>{
    it('will insert a new element at the top of the stack', ()=>{
        let stack = new Stack();
        let element1 = 23;
        expect(stack.stackPush(element1)).toBe(undefined);
    });
});

describe('push function verification', ()=>{
    it('will show that the size of the stack is 1 after an element is pushed into an empty stack', ()=>{
        let stack = new Stack();
        let element1 = 23;
        stack.stackPush(element1);
        expect(stack.getSize()).toBe(1);
    });
    it('will show that the size of the stack is 2 after 2 elements are pushed into an empty stack', ()=>{
        let stack = new Stack();
        let element1 = 34, element2 = 55;
        stack.stackPush(element1);
        stack.stackPush(element2);
        expect(stack.getSize()).toBe(2);
    });
    it('will show the top of the stack as the most recently pushed element, after pushing 1 element into an empty stack', ()=>{
        let stack = new Stack();
        let element1 = 23;
        stack.stackPush(element1);
        expect(stack.getTopOfStack()).toBe(element1);
    });
    it('will show the top of the stack as the most recently pushed element, after pushing 2 elements into an empty stack', ()=>{
        let stack = new Stack();
        let element1 = 45, element2 = 56;
        stack.stackPush(element1);
        stack.stackPush(element2);
        expect(stack.getTopOfStack()).toBe(element2);
    });
});

describe('stack pop function', ()=>{
    it('will pop the top-most element as undefined for an empty stack', ()=>{
        let stack = new Stack();
        expect(stack.stackPop()).toBe(undefined);
    });
});

describe('stack pop verification', ()=>{
    it('will show the stack size as 1 after performing one pop operation from a stack with 2 elements', ()=>{
        let stack = new Stack();
        let element1 = 99;
        let element2 = 43;
        stack.stackPush(element1);
        stack.stackPush(element2);
        let poppedElement = stack.stackPop();
        expect(stack.getSize()).toBe(1);
    });
    it('will show the stack size as 0 after performing one pop operation from a stack with 1 element', ()=>{
        let stack = new Stack();
        let element1 = 99;
        stack.stackPush(element1);
        let poppedElement = stack.stackPop();
        expect(stack.getSize()).toBe(0);
    });
    it('will show the recently popped element from a stack of 1 element as the only element pushed into an empty stack', ()=>{
        let stack = new Stack();
        let element1 = 34;
        stack.stackPush(element1);
        expect(stack.stackPop()).toBe(element1);
    });
    it('will show the recently popped element from a stack of 2 elements as the first element pushed into an empty stack', ()=>{
        let stack = new Stack();
        let element1 = 34, element2 = 55;
        stack.stackPush(element1);
        stack.stackPush(element2);
        stack.stackPop();
        expect(stack.stackPop()).toBe(element1);
    });
    it('will show the head of the stack as undefined, after performing a pop operation on a stack with 1 element', ()=>{
        let stack = new Stack();
        let element1 = 34;
        stack.stackPush(element1);
        let poppedElement = stack.stackPop();
        expect(stack.getTopOfStack()).toBe(undefined);
    });
    it('will show the head of the stack as the 1st element pushed, after performing 1 pop operation in a stack with 2 elements', ()=>{
        let stack = new Stack();
        let element1 = 34, element2 = 55;
        stack.stackPush(element1);
        expect(stack.getTopOfStack()).toBe(element1);
    });
});