const rippleBtn = document.getElementById('ripple-btn')

rippleBtn.addEventListener('click', function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
    setTimeout(() => {
        ripples.remove()
    }, 500);
})