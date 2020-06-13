/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.dictionary = {}
    this.arr = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.dictionary[val] != undefined) return false; 
    this.dictionary[val] = this.arr.length;
    this.arr.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.dictionary[val] != undefined){
        let idx = this.dictionary[val];
        let last_element = this.arr[this.arr.length -1];
        this.arr[idx] = last_element;
        this.dictionary[last_element] = idx;
        this.arr.pop();
        delete this.dictionary[val];
        return true 
    } 
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */