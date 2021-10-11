/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const one = [];
    const two = [];
    const res = [];
    let cur = l1;
    while(cur !== null){
        one.push(cur.val);
        cur = cur.next
    }
    cur = l2;
    while(cur !== null){
        two.push(cur.val);
        cur = cur.next;
    }
    const len = Math.max(one.length, two.length);
    let isCarry = 0;
    for(let i=0;i<len;++i){
        let sum = (one[i] || 0) + (two[i] || 0) + isCarry;
        if(sum > 9){
            sum -= 10;
            isCarry = 1;
        } else {
            isCarry = 0;
        }
        res.push(sum);
    }
    if(isCarry === 1) {
        res.push(1);
    }
    let head = null;
    let ret;
    for(let i=0;i<res.length;++i){
        if(head !== null) {
            head.next = new ListNode(res[i], null);
            head = head.next;
        } else {
            head = new ListNode(res[i], null);
            ret = head;
        }
    }
    return ret;
};