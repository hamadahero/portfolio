document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const setNavState = () => {
        if (window.scrollY > 40) {
            nav.style.background = 'rgba(10, 12, 16, 0.85)';
            nav.style.borderBottomColor = '#232a33';
        } else {
            nav.style.background = 'transparent';
            nav.style.borderBottomColor = 'transparent';
        }
    };

    setNavState();
    window.addEventListener('scroll', setNavState);
});
