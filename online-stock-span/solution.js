
var StockSpanner = function() {
    this.stack = [];
    this.idx = -1;
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
    this.idx++;
       // if the stack is empty
       if(!this.stack.length) {
           this.stack.push([this.idx, price]); 
           return 1;
       } else {
           let [prevIdx, prevPrice] = this.stack[this.stack.length - 1];
           while(prevPrice <= price) {
               this.stack.pop();
               if(!this.stack.length) break;
               [prevIdx, prevPrice] = this.stack[this.stack.length - 1];
           }
           this.stack.push([this.idx, price])
           if(this.stack.length === 1) return this.idx + 1;
           return this.idx - prevIdx;
       }
   
};

/** 
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/