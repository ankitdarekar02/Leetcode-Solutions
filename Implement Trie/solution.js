/**
 * Initialize your data structure here.
 */
var trieNode = function(value) {
    this.val = value;
    this.isEnd = false;
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
    let currNode = this.root;
    for (let letter of word) {
        if (!currNode.children[letter])
            currNode = currNode.children[letter] = new trieNode(letter);
        else
            currNode = currNode.children[letter];
    }
    currNode.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, isPrefix = false) {
    let currNode = this.root;
    for (let letter of word) {
        if (!currNode.children[letter])
            return false;
        else
            currNode = currNode.children[letter];
    }
    return (isPrefix)?true:currNode.isEnd;
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