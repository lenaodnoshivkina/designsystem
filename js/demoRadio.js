export default function demoRadio(style) {
    const radio = document.querySelectorAll("input[type='radio']");
    const labels = document.querySelectorAll("label.radio")
    if (style === 'Заблокирован') {
        radio.forEach(opt => {
            opt.disabled = true;
        })
        labels.forEach(opt => {
            opt.classList.add("disabled");
        })
        radio.forEach(opt => {
            opt.classList.remove("error");
        })
    }
    if (style === 'По умолчанию') {
        radio.forEach(opt => {
            opt.disabled = false;
        })
        labels.forEach(opt => {
            opt.classList.remove("disabled");
        })
        radio.forEach(opt => {
            opt.classList.remove("error");
        })
    }
    if (style === 'Ошибка') {
        radio.forEach(opt => {
            opt.disabled = false;
        })
        labels.forEach(opt => {
            opt.classList.remove("disabled");
        })
        radio.forEach(opt => {
            opt.classList.add("error");
        })
    }
}