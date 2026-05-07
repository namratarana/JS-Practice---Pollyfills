// Your task:

// Call getUser(1) first
// Then using the id from the user, call getPosts(user.id)
// Then using the first post from the posts array, call getComments(posts[0])
// Then log the comments
// Add a single .catch() at the end that logs any error

// All three calls must happen in sequence — each one depending on the result of the previous. No async/await — pure promise chaining only.

function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: id, name: 'Alice' }), 1000);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(['post1', 'post2', 'post3']), 800);
  });
}

function getComments(postName) {
  return new Promise(resolve => {
    setTimeout(() => resolve(['comment1', 'comment2']), 500);
  });
}

getUser(1)
.then(val=> {
    console.log(val);
    return getPosts(val.id);
})
.then(val=> {
    console.log(val);
    return getComments(val[0]);
})
.then(val=> console.log(val))
.catch(err=> console.log("There was some issue fetching the data"));

