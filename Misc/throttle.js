function throttle(cb, interval) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            cb.apply(this, args);
        }
    };
}

const handleScroll = throttle(()=> console.log(`Scroll position at ${window.scrollY}`), 2000)

const ele = document.getElementById('layout');
window.addEventListener('scroll', handleScroll);