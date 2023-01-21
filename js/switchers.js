export default function initSwitcher () {
    const switchers = document.querySelectorAll('.switcher_wrapper');

    const switchersBtns = [...switchers].reduce((acc, switcher) => [...acc, ...switcher.querySelectorAll('button')], []);

    switchersBtns.forEach(btn => {
            btn.addEventListener('click', switcherClick)
        });
}

function switcherClick (event) {
    const switcher = event.currentTarget.parentNode;
    switcher.querySelectorAll("button").forEach(btn => {
        if(btn.classList.contains('active')) {
            btn.classList.remove('active')
        }
    });
    event.currentTarget.classList.add("active");
}