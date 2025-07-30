// FMP Track Coding Chalenge 2025
// Day 45/365
// https://leetcode.com/problems/add-two-numbers/

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
var addTwoNumbers = function (l1, l2) {
    let list1 = [];
    let list2 = [];

    // Ambil nilai dari l1
    while (l1) {
        list1.push(l1.val);
        l1 = l1.next;
    }

    // Ambil nilai dari l2
    while (l2) {
        list2.push(l2.val);
        l2 = l2.next;
    }

    // Hitung jumlah
    const sum = (BigInt(list1.reverse().join('')) + BigInt(list2.reverse().join('')))
        .toString()
        .split('')
        .reverse()
        .map(Number);

    // Buat linked list baru
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    for (let num of sum) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummyHead.next;
};


// Good performance
// var addTwoNumbers = function (l1, l2) {
//     let dummyHead = new ListNode(0);  // simpul dummy
//     let current = dummyHead;
//     let carry = 0;

//     while (l1 || l2 || carry) {
//         const val1 = l1 ? l1.val : 0;
//         const val2 = l2 ? l2.val : 0;

//         let sum = val1 + val2 + carry;
//         carry = Math.floor(sum / 10);
//         sum = sum % 10;

//         current.next = new ListNode(sum);
//         current = current.next;

//         if (l1) l1 = l1.next;
//         if (l2) l2 = l2.next;
//     }

//     return dummyHead.next;
// };