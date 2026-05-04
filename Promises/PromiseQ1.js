// Write a function fetchUser(id) that:

// Takes an id as argument
// Returns a promise using new Promise()
// If id is a positive number, resolve with an object { id: id, name: 'User ' + id }
// If id is 0 or negative, reject with an error 'Invalid ID'

// Then consume that promise — call fetchUser twice:

// Once with a valid id that logs the user object
// Once with an invalid id that logs the error message

// ** No async/await — pure promises only **.

function fetchUser(id){
    const myPromise = new Promise(function(resolve, reject){
        if(id>0)
            resolve({id:id, name:'User'+ id})
        else
            reject("Invalid ID")
    })
    return myPromise;
}

fetchUser(3)
.then(v => console.log(v))
.catch(err => console.log(err))


fetchUser(-1)
.then(v => console.log(v))
.catch(err => console.log(err))