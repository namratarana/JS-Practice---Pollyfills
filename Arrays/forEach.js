//Native forEach
const arr = ["Rose", "John", "Peter", "Alex"];

console.log("result of native forEach: ") 
arr.forEach(cb);

function cb(ele, i, arr){
    console.log(`${ele} is at position ${i}`);
}


//Polyfill of forEach
Array.prototype.myForEach = function(cb, thisArgs){
    
    //1. check if cb is function type
    if(typeof cb !== 'function'){
        throw new TypeError(cb +  "is not a function");
    }

    for(let i=0; i<this.length; i++){

        //Take care of the sparse array
        if(i in this){
            cb.call(thisArgs, this[i], i, this);
        }
    }
}
arr.myForEach(cb);