//Native find
const arr = ["Orange", "Banana", "Apple", "Kiwi", "Mango"];
const res = arr.find(cb);
console.log("result of Native find", res);

function cb(ele, i, arr){
    return ele.length == 5 
}



//polyfill of find
Array.prototype.myFind = function(cb, thisArgs){

    //1. check if cb is function type
    if(typeof cb !== 'function'){
        throw new TypeError(cb + "is not a function");
    }

    //2. prepare result 
    let ele;

    //3. Iterate
    for(let i=0; i<this.length; i++){
        if(i in this){
            if(cb.call(thisArgs, this[i], i, this))
                return this[i];
        }
    }
    return ele;
}
console.log("result of find polyfill: ", arr.myFind(cb));