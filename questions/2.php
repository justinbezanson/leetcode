/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {
    private $root = null;

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers(ListNode $l1, ListNode $l2) : ListNode {
        $carry = 0;

        while($l1 || $l2 || $carry > 0) {
            $val1 = $l1 ? $l1->val : 0;
            $val2 = $l2 ? $l2->val : 0;
            $sum = $val1 + $val2 + $carry;

            if($sum === 10) {
                $carry = 1;
                $sum = 0;
            } else if($sum > 10) {
                $carry = 1;
                $sum = $sum - 10;
            } else {
                $carry = 0;
            }

            $this->insert($sum);

            $l1 = $l1->next;
            $l2 = $l2->next;
        }

        return $this->root;
    }

    /** 
    * @param int $n
    * @return void
    */
    function insert(int $n) : void {
        $temp = new ListNode($n);

        if($this->root == null) {
            $this->root = $temp;
        } else {
            $ptr = $this->root;
            while($ptr->next != null) {
                $ptr = $ptr->next;
            }
            $ptr->next = $temp;
        }
    }
}