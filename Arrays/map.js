//Native Map
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(cb);
console.log("result of native map: ", newArr);

function cb(ele, i, arr){
    return ele*2;
}



//Polyfill
Array.prototype.myMap = function(cb, thisArg){

    //1. check if cb is function type
    if(typeof cb !== 'function')
        throw new TypeError(callback + "is not a function");

    //2. Prepare a new result set instead of mutating the given array
    const res = [];

    //3. Iterate- purpose of map
    for(let i= 0; i<this.length; i++)
    {
        if(i in this) {  //4. if this is a sparse array. it contains hole then don't execute callback for holes.
            const ans = cb.call(thisArg, this[i], i, this)
            res.push(ans);
        }
    }
    return res;
}

console.log("result of polyfill map: ", arr.myMap(cb));