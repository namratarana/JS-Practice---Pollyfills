//Native call
function greet(...args){
    console.log(`${this.name} works at ${args[0]} as ${args[1]}`);
}

const obj = {name: "John"};

greet("Wissen", "Frontend Developer");
// obj.greet("Hello!"); //error: as greet is not a method of obj
//To call greet explicitly on obj, we use call(obj, args);
greet.call(obj, "Wissen", "Frontend Developer");

//Polyfill of call
Function.prototype.myCall = function(thisArgs, ...args){

    //1. Check if thisArgs is null or undefined , set it to global object.  Ideally, it should be an object on which the function needs to be invoked.
    thisArgs = thisArgs?? globalThis;

    //2. Wrap thisArg into Object for safety. if it's a primitive type, property can't be added to it.
    thisArgs = Object(thisArgs);

    //3. the function to be invoked on object needs to be added as property of the object.
    //   but, we need to check if the property already exists then it should not override it. 
    //   on safer side it is better to add a unique property as a Symbol.
    const fn = Symbol('fn');
    thisArgs.fn = this;

    //4. invoke the function immediately
    const result = thisArgs.fn(...args);

    //5. delete object key after
    delete thisArgs[fn];

    return result;
}
greet.myCall(obj, "Wissen", "Frontend Developer")