/**
 * Initialize your data structure here.
 */
var trieNode = function(value) {
    this.val = value;
    this.isTerminating = false;
    this.children = {};
}

var Trie = function(value = null) {
      this.root = new trieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let parent = this.root;
    for (let char of word) {
        if (!parent.children[char])
            parent = parent.children[char] = new trieNode(char);
        else
            parent = parent.children[char];
    }
    parent.isTerminating = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, isPrefix = false) {
    let parent = this.root;
    for (char of word) {
        if(!parent.children[char]){
            return false
        }
        else {
            parent = parent.children[char]
        }
    }
    return (isPrefix)? true: parent.isTerminating;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.search(prefix, true);
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */