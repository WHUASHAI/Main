function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.querySelector('.container').appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 5000);
}

setInterval(createLeaf, 300);