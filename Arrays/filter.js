//Native Filter
const arr = [1,2,3,4,5];
const newArr = arr.filter(cb);
console.log("result of native filter: ", newArr);

function cb(ele, i, arr){
    return ele%2 == 0
}



//Polyfill of Filter
Array.prototype.myFilter = function(cb, thisArg){   //assigning to right prototype - filter belongs to Array

    //1. check if the callback received is of function type
    if(typeof cb !== 'function'){
        throw new TypeError( cb + "is not a function");
    }
    
    //2. Return updated array instead of mutating original array
    const res = [];
    
    //3. Iterate 
    for(let i= 0; i< this.length; i++){
        if(i in this){ //4. Handle sparse array
            const ans = cb.call(thisArg, this[i], i, this);
            if(ans)
                res.push(this[i]);
        }
    }
    return res;
}

console.log("result of filter Polyfill: ", arr.myFilter(cb));