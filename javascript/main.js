/*document.addEventListener('scroll' , () => {
    let navbar = document.querySelector('.navbar');

    if (window.scrollY > 0){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})*/


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

