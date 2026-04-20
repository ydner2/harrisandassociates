(function(){
    "use strict";
    console.log("running JS");













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
});

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

}
})();