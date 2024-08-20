### Question
This problem was asked by Google.

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.

### Thinking
1. Counting the data would simply use the one pass = x
2. Linklist is not an array to simply point and delete = x
3. Two pointer approach: 
   1. Initialize 2 pointer data with the same linked list
   2. First one goes ahead till the kth element.
   3. Now both pointer would move together till the first reached to the end
   4. The second pointer would be just infront of kth element from the last. Skip the next element and move ahead