class TrieNode:
    def __init__(self,c):
        self.c = c
        self.children = {}
        self.end_node = 0
        
class Trie:
    def __init__(self):
        self.root = TrieNode(None)

    def insert(self, word):
        parent = self.root
        for i,symbol in enumerate(word):
            if symbol not in parent.children: 
                parent.children[symbol] = TrieNode(symbol)
            parent = parent.children[symbol]
            if i == len(word) - 1:
                parent.end_node = 1
            
        
class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        self.num_words = len(words)
        res, trie = [], Trie()
        for word in words: trie.insert(word) 
        for i in range(len(board)):
            for j in range(len(board[0])):
                self.dfs(board, trie.root, i, j, "", res)
        return res
    
    def dfs(self, board, node, i, j, path, res):
        if self.num_words == 0: return
        if node.end_node:
            res.append(path)
            node.end_node = False
            self.num_words -= 1

        if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]): return 
        tmp = board[i][j]
        if tmp not in node.children: return

        board[i][j] = "#"
        for x,y in [[0,-1], [0,1], [1,0], [-1,0]]:
            self.dfs(board, node.children[tmp], i+x, j+y, path+tmp, res)
        board[i][j] = tmp
        