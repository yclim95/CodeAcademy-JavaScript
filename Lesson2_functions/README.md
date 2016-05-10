#Lesson2 Functions
## Intro to Functions

Programming is similar to baking cakes. Seriously! Imagine you are trying to teach your friend Jane how to bake many different types of cakes.

Each cake takes in different ingredients (ie. inputs). But the 'bake' instructions are always the same. For example:

1. Pre-heat the oven at 300 degrees
2. Mix all the ingredients in a bowl
3. Put contents into oven for 30 mins

And the **output** will be a different cake each time.

It is tedious to have to repeat to Jane the same 'bake' instructions every time. What if we could just say 'bake' and Jane would know to execute those three steps? That is exactly what a function is!


```javascript
// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(8);
```

## Function Syntax 

A function takes in inputs, does something with them, and produces an output.

Here's an example of a function:


```javascript
var sayHello = function(name) {
    console.log('Hello ' + name);
};
```

1. First we declare a function using `var`, and then give it a name `sayHello`. The name should begin with a lowercase letter and the convention is to use lowerCamelCase where each word (except the first) begins with a capital letter.

2. Then we use the `function` keyword to tell the computer that you are making a function.

3. The code in the parentheses is called a **parameter**. It's a placeholder word that we give a specific value when we call the function.

4. Then write your block of reusable code between `{ }`. Every line of code in this block must end with a `;`.

You can run this code by "calling" the function, like this:

```javascript
sayHello("Emily");
```

Calling this function will print out `Hello Emily`.

## How does Function work ? 
### Complicated ? Break it down

```javascript
var functionName = function( ) {
    // code code code
    // code code code
    // (more lines of code)
};

```

1. The `var` keyword declares a variable named `functionName`.

2. The keyword `function` tells the computer that `functionName` is a function and not something else.

3. Parameters go in the parentheses. The computer will look out for it in the code block.

4. The code block is the reusable code that is between the curly brackets `{ }`. Each line of code inside `{ }` must end with a semi-colon.

5. The entire function ends with a semi-colon.


To use the function, we **call** the function by just typing the function's name, and putting a parameter value inside parentheses after it. The computer will run the reusable code with the specific parameter value substituted into the code.

### Questions on the sytax of Functions 

**1. Do I need to organized our code?** 

The computer might understand your code. But, it will be tidier and easier if we organize our code as everyone is able to understand the code easier especially if you are working in a team. 

**2. Do I need to put a semi-colon right at the end of the each line of the code in the reusable block & at the end of the entire function?** 

YES. At the end of each line of code (within the { }) and after the entire function (after the { }), please put a semi-colon. The semi-colon acts like a period in a sentence. It helps the computer know where there are stopping points in the code.