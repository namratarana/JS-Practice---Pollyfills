//Native apply
function greet(...args){
    console.log(`${this.name} works at ${args[0]} as ${args[1]}`);
}

const obj = {
    name: 'Namrata'
}

greet('Wissen', 'Frontend Developer'); //this points to global/window object as greet is a regular function and not a method  of an object
// to explicitly call the function on an object, we use apply 
greet.apply(obj, ["Wissen", "Frontend developer"]);


//Polyfill of apply
Function.prototype.myApply = function(thisArgs, args){

    //1. check if the object on which the function has to be invoked is not null or undefined
    thisArgs = thisArgs?? globalThis;

    //2. Wrap thisArgs into wrapper Object for safety. it should not be primitive type as property needs to be addded to thisArgs
    thisArgs = Object(thisArgs);

    //3. Add function(this) as a method to the object(thisArgs) against a key. 
    //  But it should not override the existing key(if any). 
    //  On a safer side, create a key as a Symbol.
    const fn = Symbol('fn');
    thisArgs[fn] = this;
    
    //4. Invoke the method immediately
    const result= thisArgs.fn(...args);

    //5. delete the method from the object once it is used.
    delete thisArgs['fn'];

    return result
}
greet.apply(obj, ["Wissen", "Frontend Developer"]);