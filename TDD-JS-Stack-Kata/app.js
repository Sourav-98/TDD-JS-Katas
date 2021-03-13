
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
            return this.stackData[0];
        }
    }

    stackPush(element){
        this.stackData.splice(0, 0, element);
    }
    stackPop(){
        let poppedElement = this.stackData[0];
        this.stackData.splice(0, 1);
        return poppedElement;
    }
    
}

module.exports = Stack;
