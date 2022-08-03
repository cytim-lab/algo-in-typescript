# Gas Station

https://leetcode.com/problems/gas-station/

There are `n` gas stations along a circular route, where the amount of gas at
the `i`th station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to
travel from the `i`th station to its next `(i + 1)`th station. You begin the
journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return _the starting gas station's
index_ if you can travel around the circuit once in the clockwise direction,
otherwise return `-1`. If there exists a solution, it is **guaranteed** to be
**unique**.

## Examples

### Example 1

```
gas    = [1, 2, 3, 4, 5]
cost   = [3, 4, 5, 1, 2]
output = 3
Explanation:
- Start at station 3. Your tank = 0 + 4 = 4
- Travel to station 4. Your tank = 4 - 1 + 5 = 8
- Travel to station 0. Your tank = 8 - 2 + 1 = 7
- Travel to station 1. Your tank = 7 - 3 + 2 = 6
- Travel to station 2. Your tank = 6 - 4 + 3 = 5
- Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
```

### Example 2

```
gas    = [2, 3, 4]
cost   = [3, 4, 3]
output = -1
```
