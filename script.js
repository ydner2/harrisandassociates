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
})();