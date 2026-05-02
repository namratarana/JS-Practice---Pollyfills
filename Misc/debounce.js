function debounce(cb, pauseTime){
  let timer;

  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => {cb.apply(this, args)}, pauseTime);
  }
}

const searchHandler = debounce((e)=> console.log(`search query is ${e.target.value}`), 1000hhhh)

const input = document.getElementById('searchInput');
input.addEventListener("input", searchHandler);