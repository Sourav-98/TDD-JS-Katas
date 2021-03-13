
class Stack{

    stackData = undefined;

    constructor() {
        this.stackData = new Array();
    }

    isEmpty(){
        return this.stackData.length == 0;
    }

    getSize(){
        return this.stackData.length;
    }

    getTopOfStack(){
        if(this.getSize() == 0){
            return undefined;
        }
        else{
            return this.stackData[this.getSize() - 1];
        }
    }

    stackPush(element){
        this.stackData.push(element);
    }
    stackPop(){
        return this.stackData.pop();
    }
    
}

module.exports = Stack;
