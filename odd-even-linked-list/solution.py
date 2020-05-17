# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        oddHead = head
        evenHead = head.next
        even = evenHead
        while evenHead and evenHead.next:
            oddHead.next = evenHead.next
            oddHead = oddHead.next
            evenHead.next = oddHead.next
            evenHead = evenHead.next
        oddHead.next = even
        return head
                        
            
            
            
        
        