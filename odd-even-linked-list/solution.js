/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || !head.next) return head
        let oddHead = head
        let evenHead = head.next
        const even = evenHead
        while (evenHead && evenHead.next){
            oddHead.next = evenHead.next
            oddHead = oddHead.next
            evenHead.next = oddHead.next
            evenHead = evenHead.next
            }
        oddHead.next = even
        return head
};