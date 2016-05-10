#Lesson1 Introduction To Javascript
## Getting Started with Programming 

### 1. Length (String)
To discover the length of your name write your name within quotes. Then write a period (full stop) and the word length like this:

```javascript
"yourName".length;
```

### 2. Basic Maths 

**Less Numbers**
```javascript
3+4;
```

**More Numbers**
```javascript
3*5/5;
```

### 3. Comments 
```javascript
// This is a comment that the computer will ignore. 
// It is for your eyes only!
```

The `//` sign is for comments. A comment is a line of text that JavaScript won't try to run as code. It's just for humans to read.

### 4. Confirm 
```javascript
confirm("I feel awesome!");
confirm("I am ready to go.");
```

These boxes can be used on websites to **confirm** things with users. You've probably seen them pop up when you try to delete important things or leave a website with unsaved changes.

### 5. Prompt
```javascript
prompt("What is your name?");
prompt("What is Ubuntu?");
```

The program need some input to start an actions.You can do this by using a **prompt**.

### 6. Console.log 
You may have noticed that the interpreter doesn't print out every single thing it does. So if we want to know what it's thinking, we sometimes have to ask it to speak to us.

`console.log()` will take whatever is inside the parentheses and log it to the console below your code—that's why it's called `console.log()`!

This is commonly called **printing out**.

```javascript
console.log(2*5);
console.log("Hello");
```


## Data Type 
### 1. Numbers 
Are quantities, just like you're used to. You can do math with them.

To make a number in your code, just write a number as numerals without quotes: `42`, `190.12334`.

### 2. Strings
Are sequences of characters, like the letters `a-z`, spaces, and even numbers. These are all strings: `"Ryan"`, `"4"` and `"What is your name?"` Strings are extremely useful as labels, names, and content for your programs.

To write a string, surround words with quotes: `"What is your name?"`

### 3. Boolean
Is either `true` or `false`.

For example, comparing two numbers returns a true or false result:

1) `23 > 10` is `true`
2) `5 < 4` is `false`

## Dive-in a little (Decision Making)
### 1. Comparison Operator 
List of comparison operators : 
1. `>` Greater than
2. `<` Less than
3. `<=` Less than or equal to
4. `>=` Greater than or equal to
5. `===` Equal to
6. `!==` Not equal to

```javascript
console.log(15 > 4); // 15 > 4 evaluates to true, so true is printed.
```