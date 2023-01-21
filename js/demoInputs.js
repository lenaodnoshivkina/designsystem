export default function demoInput(style) {
    const input = document.getElementById("demo");
    const label = document.getElementById("label_demo");
    const isItSize = ["large", "medium", "small"].includes(style);
    if (isItSize) {
        if (input.classList.contains("large")) {
            input.classList.remove("large");
            label.classList.remove("large");
        }
        if (input.classList.contains("medium")){
            input.classList.remove("medium"); 
            label.classList.remove("medium");
        }
        if (input.classList.contains("small")) {
            input.classList.remove("small");
            label.classList.remove("small");
        }
        input.classList.add(style);
        label.classList.add(style);
    }
    if (style === 'Заблокирован') {
        input.disabled = true;
        input.classList.remove("error");
        label.classList.remove("error");
    }
    if (style === 'По умолчанию') {
        input.disabled =  false;
        input.classList.remove("error");
        label.classList.remove("error");

    }
    if (style === 'Ошибка') {
        input.disabled =  false;

        input.classList.add("error");
        label.classList.add("error");

    }
}