Debouncing :

tyoing slow = 200ms
typing fast = 30ms

Performance :

- iphone pro max = 14 letter \* 1000 = 14000
- with debouncing = 3 API \* 1000 = 3000

Debouncing with 200ms

- if difference between 2 key strokes <200ms - DECLINE API call
- > 200ms make an API call

Cache :
time complexity to search in array = O(n)
time complexity to search in object = O(1)
