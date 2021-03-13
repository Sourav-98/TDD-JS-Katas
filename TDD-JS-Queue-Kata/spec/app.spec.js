let Queue = require('./../app');

describe('queue content properties', ()=>{
    it('has a function isEmpty that returns true when the queue is empty', ()=>{
        let queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
    });
    it('has a function isEmpty that returns false when the queue is not empty', ()=>{
        let queue = new Queue();
        let element1 = 54
        queue.queueData = [element1];
        expect(queue.isEmpty()).toBe(false);
    });
    it('has a function getSize that returns the size of an empty queue as zero', ()=>{
        let queue = new Queue();
        expect(queue.getSize()).toBe(0);
    });
    it('has a function getSize that returns the size of a queue with one element as 1', ()=>{
        let queue = new Queue();
        let element1 = 89;
        queue.queueData = [element1];
        expect(queue.getSize()).toBe(1);
    });
    it('has a function getSize that returns the size of a queue with two elements as 2', ()=>{
        let queue = new Queue();
        let element1 = 67;
        let element2 = 109;
        queue.queueData = [element1, element2];
        expect(queue.getSize()).toBe(2);
    });
    it('has a function getHead() that returns the front-most element of a queue with only 1 element', ()=>{
        let queue = new Queue();
        let element1 = 89;
        queue.queueData = [element1];
        expect(queue.getHead()).toBe(element1);
    });
    it('has a function getHead() that returns the front-most element of a queue with 2 elements', ()=>{
        let queue = new Queue();
        let element1 = 43;
        let element2 = 21;
        queue.queueData = [element1, element2];
        expect(queue.getHead()).toBe(element1);
    });
    it('has a function getTail() that returns the back-most element of a queue with only 1 element', ()=>{
        let queue = new Queue();
        let element1 = 89;
        queue.queueData = [element1];
        expect(queue.getTail()).toBe(element1);
    });
    it('has a function getTail() that returns the back-most element of a queue with 2 elements', ()=>{
        let queue = new Queue();
        let element1 = 43;
        let element2 = 21;
        queue.queueData = [element1, element2];
        expect(queue.getTail()).toBe(element2);
    })
});

describe('queue insert', ()=>{
    it('is a function that adds an element at the end of the queue', ()=>{
        let queue = new Queue();
        let element1 = 23;
        expect(queue.insert(element1)).toBe(undefined);
    });
});

describe('queue insert verification', ()=>{
    it('will show that the size of the queue is 1 after 1 element is inserted', ()=>{
        let queue = new Queue();
        let element1 = 17;
        queue.insert(element1);
        expect(queue.getSize()).toBe(1);
    });
    it('will show that the size of the queue is 2 after 2 elements are inserted', ()=>{
        let queue = new Queue();
        let element1 = 56;
        let element2 = 33;
        queue.insert(element1);
        queue.insert(element2);
        expect(queue.getSize()).toBe(2);
    });
    it('will show that the size of the queue is 3 after 3 elements are inserted', ()=>{
        let queue = new Queue();
        let element1 = 56;
        let element2 = 33;
        let element3 = 90;
        queue.insert(element1);
        queue.insert(element2);
        queue.insert(element3);
        expect(queue.getSize()).toBe(3);
    });
    it('will show the head of the queue when 1 element is inserted into an empty queue', ()=>{
        let queue = new Queue();
        let element1 = 17;
        queue.insert(element1);
        expect(queue.getHead()).toBe(element1);
    });
    it('will show the head of the queue when 2 elements are inserted into an empty stack', ()=>{
        let queue = new Queue();
        let element1 = 56;
        let element2 = 33;
        queue.insert(element1);
        queue.insert(element2);
        expect(queue.getHead()).toBe(element1);
    });
    it('will show the head of the queue when 3 elements are inserted into an empty queue', ()=>{
        let queue = new Queue();
        let element1 = 56;
        let element2 = 33;
        let element3 = 90;
        queue.insert(element1);
        queue.insert(element2);
        queue.insert(element3);
        expect(queue.getHead()).toBe(element1);
    });
    it('will show the tail of the queue when 1 element is inserted into an empty queue', ()=>{
        let queue = new Queue();
        let element1 = 17;
        queue.insert(element1);
        expect(queue.getTail()).toBe(element1);
    });
    it('will show the head of the queue when 2 elements are inserted into an empty stack', ()=>{
        let queue = new Queue();
        let element1 = 56;
        let element2 = 33;
        queue.insert(element1);
        queue.insert(element2);
        expect(queue.getTail()).toBe(element2);
    });
    it('will show the head of the queue when 3 elements are inserted into an empty queue', ()=>{
        let queue = new Queue();
        let element1 = 56;
        let element2 = 33;
        let element3 = 90;
        queue.insert(element1);
        queue.insert(element2);
        queue.insert(element3);
        expect(queue.getTail()).toBe(element3);
    });
});

describe('queue delete', ()=>{
    it('is a function that returns undefined when deleting from an empty queue', ()=>{
        let queue = new Queue();
        expect(queue.delete()).toBe(undefined);
    });
    it('is a function that returns the deleted element after 1 deletion from the head of a queue with 1 element', ()=>{
        let queue = new Queue();
        let element1 = 45;
        queue.insert(element1);
        expect(queue.delete()).toBe(element1);
    });
    it('is a function that returns the deleted element after 2 deletions from the head of a queue with 2 elements', ()=>{
        let queue = new Queue();
        let element1 = 32;
        let element2 = 88;
        queue.insert(element1);
        queue.insert(element2);
        queue.delete();
        expect(queue.delete()).toBe(element2);
    });
});

describe('queue delete verification', ()=>{
    it('will show the size of the queue as 0 after deleting 1 element from a queue of size 1', ()=>{
        let queue = new Queue();
        let element1 = 44;
        queue.insert(element1);
        queue.delete();
        expect(queue.getSize()).toBe(0);
    });
    it('will show the size of the queue as 1 after deleting 1 element from a queue of size 2', ()=>{
        let queue = new Queue();
        let element1 = 45;
        let element2 = 83;
        queue.insert(element1);
        queue.insert(element2);
        queue.delete();
        expect(queue.getSize()).toBe(1);
    });
    it('will show the size of the queue as 0 after deleting 2 elements from a queue of size 2', ()=>{
        let queue = new Queue();
        let element1 = 95;
        let element2 = 66;
        queue.insert(element1);
        queue.insert(element2);
        queue.delete();
        queue.delete();
        expect(queue.getSize()).toBe(0);
    });
    it('will return the head of the queue as undefined when deleting an element from a queue of size 1', ()=>{
        let queue = new Queue();
        let element1 = 22;
        queue.insert(element1);
        queue.delete();
        expect(queue.getHead()).toBe(undefined);
    });
    it('will return the head of the queue when deleting an element from a queue of size 2', ()=>{
        let queue = new Queue();
        let element1 = 22;
        let element2 = 71;
        queue.insert(element1);
        queue.insert(element2);
        queue.delete();
        expect(queue.getHead()).toBe(element2);
    });
    it('will return the head of the queue when deleting 2 elements from a queue of size 3', ()=>{
        let queue = new Queue();
        let element1 = 22;
        let element2 = 71;
        let element3 = 69;
        queue.insert(element1);
        queue.insert(element2);
        queue.insert(element3);
        queue.delete();
        queue.delete();
        expect(queue.getHead()).toBe(element3);
    });
    it('will return the tail of the queue as undefined when deleting 1 element from a queue of size 1', ()=>{
        let queue = new Queue();
        let element1 = 99;
        queue.insert(element1);
        queue.delete();
        expect(queue.getTail()).toBe(undefined);
    });
    it('will return the tail of the queue when deleting an element from a queue of size 2', ()=>{
        let queue = new Queue();
        let element1 = 22;
        let element2 = 71;
        queue.insert(element1);
        queue.insert(element2);
        queue.delete();
        expect(queue.getTail()).toBe(element2);
    });
    it('will return the tail of the queue when deleting 2 elements from a queue of size 3', ()=>{
        let queue = new Queue();
        let element1 = 22;
        let element2 = 71;
        let element3 = 69;
        queue.insert(element1);
        queue.insert(element2);
        queue.insert(element3);
        queue.delete();
        queue.delete();
        expect(queue.getHead()).toBe(element3);
    });
});

