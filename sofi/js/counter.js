const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerHTML;

        const inc = Math.ceil(target / speed);

        if(count < target) {
            counter.innerHTML = Math.ceil(count + inc);
            setTimeout(updateCount, 100);
        } else {
            count.innerHTML = target;
        }
    }

    updateCount();
})