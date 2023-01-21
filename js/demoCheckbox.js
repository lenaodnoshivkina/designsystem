export default function demoCheckbox(style) {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const labels = document.querySelectorAll("label.checkbox")
    if (style === 'Заблокирован') {
        checkboxes.forEach(opt => {
            opt.disabled = true;
        })
        labels.forEach(opt => {
            opt.classList.add("disabled");
        })
        checkboxes.forEach(opt => {
            opt.classList.remove("error");
        })
    }
    if (style === 'По умолчанию') {
        checkboxes.forEach(opt => {
            opt.disabled = false;
        })
        labels.forEach(opt => {
            opt.classList.remove("disabled");
        })
        checkboxes.forEach(opt => {
            opt.classList.remove("error");
        })
    }
    if (style === 'Ошибка') {
        checkboxes.forEach(opt => {
            opt.disabled = false;
        })
        labels.forEach(opt => {
            opt.classList.remove("disabled");
        })
        checkboxes.forEach(opt => {
            opt.classList.add("error");
        })
    }
}