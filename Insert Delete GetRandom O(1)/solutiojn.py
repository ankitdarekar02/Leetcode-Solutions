class RandomizedSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.dictionary = {}
        self.Array = []

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        """
        if val in self.dictionary:
            return False
        self.dictionary[val] = len(self.Array)
        self.Array.append(val)
        return True
        

    def remove(self, val: int) -> bool:
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        """
        if val in self.dictionary:
            last_element, idx_of_value_to_be_delted = self.Array[-1], self.dictionary[val]
            self.Array[idx_of_value_to_be_delted], self.dictionary[last_element] = last_element,                             idx_of_value_to_be_delted
            self.Array.pop()
            del self.dictionary[val]
            return True
        return False

    def getRandom(self) -> int:
        """
        Get a random element from the set.
        """
        return choice(self.Array)
        


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()