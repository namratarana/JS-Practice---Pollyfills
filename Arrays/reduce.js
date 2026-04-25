//Native Reduce
const arr = [1,2,3,4,5];
const res = arr.reduce(cb, 10);
console.log("result of native reduce: ", res);

function cb(acc, currEle, i, arr){
    acc = acc + currEle;
    return acc;
}


//Polyfill of Reduce
Array.prototype.myReduce = function(cb, thisArgs){
    
    //1. Check type of cb
    if(typeof cb !== 'function')
        throw new TypeError(cb + "is not  function");

    //2. return a value - Purpose of reduce
    let res = thisArgs;
    
    //3. Iterate
    for(let i=0; i< this.length; i++)
    {
        if(i in this){
            res = cb.call(thisArgs, res, this[i], i, this)
        }
    }
    return res;
}
console.log("result polyfill of reduce: ", arr.myReduce(cb, 20));
