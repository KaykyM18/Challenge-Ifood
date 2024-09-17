document.querySelector('.finalize-button').addEventListener('click', function() {
    const order = this.closest('.order');
    order.classList.remove('in-progress');
    order.classList.add('finished');
    this.style.display = 'none';  // Hide the button after clicking
});
