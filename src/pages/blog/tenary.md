---
layout: "../../layouts/BlogLayout.astro"
title: "Tenary operator"
description: "Ternary if statements are a shorthand way of writing an if-else statement in a single line of code. They are especially useful for simple conditions where you want to assign a value to a variable based on a certain condition"
pubDate: "Jan 16, 2023"
---

Ternary if statements are a shorthand way of writing an if-else statement in a single line of code. They are especially useful for simple conditions where you want to assign a value to a variable based on a certain condition.

The syntax for a ternary if statement is as follows:

'''js
variable = (condition) ? value_if_true : value_if_false

'''
For example, let's say you want to assign a variable called "status" the value "approved" if a certain condition is true, and "denied" if it is false. You could use the following ternary if statement to accomplish this:

'''js
status = (approval_status == "approved") ? "approved" : "denied"
You can also use ternary if statement in cases like :
'''


'''js
age >= 18 ? "Adult" : "Minor"

'''
In this example, if the value of the "age" variable is greater than or equal to 18, the variable "status" will be assigned the value "Adult", otherwise it will be assigned the value "Minor".

It's also important to keep in mind that ternary if statements can be nested, which can help make your code more readable. For example, you could use a ternary if statement inside another ternary if statement to check multiple conditions.

'''js
result = (x > y) ? (x > z) ? "x is greater" : "z is greater" : (y > z) ? "y is greater" : "z is greater"

'''

This way of writing the code makes it more readable and shorter.

In conclusion, ternary if statements are a useful tool for writing concise and readable code. They can be used for simple conditions and also can be nested to check multiple conditions.
