// A sample Queue Kata with TDD

class Queue{

    queueData = undefined;

    constructor(){
        this.queueData = new Array();
    }

    isEmpty(){
        if( this.getSize() === 0 ){
            return true;
        }
        else{
            return false;
        } 
    }

    getSize(){
        return this.queueData.length;
    }
    getHead(){
        return this.queueData[0];
    }
    getTail(){
        return this.queueData[this.getSize()-1];
    }

    insert(element){
        this.queueData.splice(this.queueData.length, 0, element);
    }
    delete(){
        let deletedElement = this.getHead();
        this.queueData.splice(0, 1);
        return deletedElement;
    }


}

module.exports = Queue;