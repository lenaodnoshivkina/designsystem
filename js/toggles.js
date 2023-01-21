export default function initToggle () {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', toggleClick)
    });
}

function toggleClick (event) {
    const toggle = event.currentTarget;
        if(toggle.classList.contains('active')) {
            toggle.classList.remove('active')
        } else {
            toggle.classList.add("active");
        }
}