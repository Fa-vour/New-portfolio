/*================ toggle icon navbar ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xbox');
    navbar.classList.toggle('active');
};

/*================ Scroll section active link ===============*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*================ Sticky nav bar ===============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);

    /*================ remove toggle icon and navbar when click navbar link (scroll) ===============*/
    menuIcon.classList.remove('fa-xbox');
    navbar.classList.remove('active');
};

// =============== Scroll reveal ==============
ScrollReveal({ 
    // reset: true,
    disttance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: left});
ScrollReveal().reveal('.home-content p, .about-content', {origin: right});

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    console.log(name);
    const entries = Object.fromEntries(data.entries());
    console.table(entries);
});

function sendToWhatsapp(){
    let number = "08172644182";

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text"
    + "Name : " +name+ "%0a"
    + "Email : " +email+ "%0a"
    + "Phone : " +phone+ "%0a"
    + "Message : " +message+ "%0a%0a";

    window.open(url, '_blank').focus();
}

function emailSend(){
    let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
    //   number: document.getElementById("number").value,
    //   subject : document.getElementById("email-subject").value,
      message : document.getElementById("message").value,
    }
  
    emailjs.send("service_i8ys40y", "template_uyhgmi8", parms).then(alert("Email Sent!!!"))
  }