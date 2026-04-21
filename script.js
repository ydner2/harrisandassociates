(function(){
    "use strict";
    console.log("running JS");










//nav toggle
const hamburger = document.querySelector('.navhamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');

    const isOpen = nav.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
}); //end nav open

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
}); //end nav close


//for cards
document.querySelectorAll('.policy-header').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.policy-card');

        document.querySelectorAll('.policy-card').forEach(item => {
            item.classList.remove('open');
            item.querySelector('.policy-header').setAttribute('aria-expanded', 'false');
        });

        card.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
    });
}); //end card opening

//for accordian
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {

        const item = button.closest('.faq-item');
        const isOpen = item.classList.contains('open');

        // close all
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('open');

            const btn = faq.querySelector('.faq-question');
            btn.setAttribute('aria-expanded', 'false');

            const arrow = faq.querySelector('.faq-arrow');
            if (arrow) {
                arrow.src = "images/arrowdown.png";
                arrow.alt = "arrow down";
            }
        });

        // open clicked (if it wasn't already open)
        if (!isOpen) {
            item.classList.add('open');
            button.setAttribute('aria-expanded', 'true');

            const arrow = button.querySelector('.faq-arrow');
            if (arrow) {
                arrow.src = "images/arrowup.png";
                arrow.alt = "arrow up";
            }
        }
    });
}); //end accordian opening and closing

//for form auto fill
const params = new URLSearchParams(window.location.search);
const policy = params.get("policy");

if (policy) {

    // fill hidden field
    const hiddenField = document.getElementById("policyField");
    if (hiddenField) {
        hiddenField.value = policy;
    }

    // OPTIONAL: auto-check matching checkbox
    const checkboxes = document.querySelectorAll('input[name="services[]"]');

    checkboxes.forEach(box => {
        if (box.value === policy) {
            box.checked = true;
        }
    });

     if (policy) {
        document.querySelector(".contact-form")?.scrollIntoView({
        behavior: "smooth"
    });
}

} //ends for form auto fill



})();