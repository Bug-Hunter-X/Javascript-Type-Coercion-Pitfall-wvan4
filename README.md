# Javascript Type Coercion Pitfall

This example demonstrates a common pitfall in Javascript related to type coercion. When using the '+' operator with a mix of number and string operands, Javascript will implicitly coerce the number to a string and perform string concatenation instead of numerical addition. This can lead to unexpected results and subtle bugs in your code.  The solution involves using strict comparison (`===`) and explicit type conversion when necessary.

## Bug
The `foo` function intends to add two numbers, but produces an unexpected result when one input is a string. 

## Solution
The solution involves explicitly converting the input to numbers using `parseInt` or `Number` before the addition.