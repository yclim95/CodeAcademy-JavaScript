#Lesson 6 Data Structure

## Review 
### 1. Declare array 

**Just a recap on what is an array**
```javascript
var list=["one","two","three"];
```

### 2. Access array
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]); //Output: JavaScript
```

### 3. Array Properties 
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages.length);
```

### 3. Iterating over array 
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for(var i=0; i<languages.length; i++){
 console.log(languages[i]);   
}
```

## More on Array 
### 1. Heterogeneous Arrays
Heterogeneous - Mixture of Arrays

Examples: 
```javascript
var pronouns = ["I", "you", "we"];
var numbers = [1, 2, 3];
```

### 2. Arrays of Arrays 
You can make a two-dimensional array by nesting arrays one layer deep, like so:

```javascript
var twoDimensional = [[1, 1], [1, 1]];

```

This array is two-dimensional because it has two rows that each contain two items. If you were to put a new line between the two rows, you could log a 2D object—a square—to the console, like so:

| "0"   | "1"   | 
| ----  |:-----:| 
| 1     |   1   |
| ----  |:-----:| 
| 1     |   1   |