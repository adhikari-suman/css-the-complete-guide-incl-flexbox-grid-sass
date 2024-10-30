let backdrop = document.querySelector('.backdrop');
let selectPlanButtons = document.querySelectorAll(".plan .button");
let modal = document.querySelector('.modal');
let modalCancelButton = document.querySelector('button.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

console.dir(selectPlanButtons);

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', (e) => {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');

    });
}

if (modalCancelButton) {
    modalCancelButton.addEventListener('click', (e) => {
        closeModal();
    });
}


backdrop.addEventListener('click', (e) => {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    // mobileNav.style.display = 'none';

    closeModal();
    mobileNav.classList.remove('open');
})

function closeModal() {
    if(modal){
        modal.classList.remove('open');
    }

    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', (e) => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

console.dir(backdrop)
