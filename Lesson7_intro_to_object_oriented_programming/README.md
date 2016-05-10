#Lesson7 Object Oriented Programming(OOP)
## Intro to OOP

We have discussed four data types: numbers, strings, booleans and arrays.

In this lesson, we focus on a fifth data type: **objects**. This data type is a little bit more complex. **Objects** allow us to represent in code real world things and entities (such as a person or bank account). We do this by storing all relevant information in one place—an object.

How do we create an object? 
Like declaring a variable, or defining a function, we use var, followed by the name of the object and an equals sign. Each object then:

1. starts with `{`
2. has information inside
3. ends with `};`

EG:

```javascript
var bob={
    
};
```

## Object Properties

Let's review what we previously covered. Each piece of information we include in an object is known as a **property**. Think of a property like a **category label** that belongs to some object. When creating an object, each property has a name, followed by `:` and then the **value** of that property. For example, if we want Bob's object to show he is 34, we'd type in `age: 34`.

`age` is the property, and `34` is the **value** of this property. When we have more than one property, they are separated by commas. The last property does not end with a **comma**.

E.G :

```javascript
var Spencer = {
  age: 22,
  country: "United States"
};
```

## Accessing Properties 

Notice our example objects `bob` and `susan`. In this case both `bob` and `susan` each have two properties, `name` and `age`.

After creating our objects we have added code to access these properties. Notice that we save `bob`'s name, `"Bob Smith"`, into the global variable `name1`. We do this in line 10.

E.G :

```javascript
var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name; //Line 10
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 =susan.name;
var age2 =susan.age;
```

2 ways of accesing : 

**1. dot notation **
`ObjectName.PropertyName` (e.g, `bob.name`)

**2. bracket notatation**
`ObjectName["PropertyName"]`(e.g, 'bob["name")')


## Creating Objects  
### 1. Literal Notation
Creating a new object with `{ }` and defining properties within the brackets.

EG : 
```javascript
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
```

### 2. Constructor Notation 
creating objects without using the curly brackets { } is to use the keyword `new`. 


EG : 
```javascript
// Make a new susan2 object, using a constructor instead
var susan2=new Object();
susan2.name="Susan Jordan";
susan2.age=24;
```

