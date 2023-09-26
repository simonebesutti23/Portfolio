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


const contactForm = document.querySelector("#form");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#emailId");
const messageInput = document.querySelector("#message");


const publicKey = "ZOsENfQL-H8edUhqt";
const serviceId = "service_6lch37a";
const templateId = "template_upu0jsq"

emailjs.init(publicKey);

contactForm.addEventListener("submit" , e => {
    e.preventDefault();
    submitBtn.innerText = "Just a moment...."

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }


    emailjs.send(serviceId, templateId, inputFields)
    .then(() => {
        submitBtn.innerText = "Message Sent Successfully";
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => {
        console.log(error);
        submitBtn.innerText = "Something went wrong"
    });
});