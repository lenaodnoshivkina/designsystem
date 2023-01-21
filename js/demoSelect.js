export default function demoSelect(style) {
    const select = document.getElementById("demo");
    const selectSelected = select.querySelector(".select-selected");
    const selectItems = select.querySelector(".select-items");
    const isItSize = ["large", "medium", "small"].includes(style);
    if (isItSize) {
        if (selectSelected.classList.contains("large")) {
            selectSelected.classList.remove("large");
            selectItems.classList.remove("large");
        }
        if (selectSelected.classList.contains("medium")){
            selectSelected.classList.remove("medium"); 
            selectItems.classList.remove("medium");
        }
        if (selectSelected.classList.contains("small")) {
            selectSelected.classList.remove("small");
            selectItems.classList.remove("small");
        }
        selectSelected.classList.add(style);
        selectItems.classList.add(style);
    }
    if (style === 'Заблокирован') {
        select.classList.add("disabled");
        select.classList.remove("error");
    }
    if (style === 'По умолчанию') {
        select.classList.remove("disabled");
        select.classList.remove("error");
    }
    if (style === 'Ошибка') {
        select.classList.remove("disabled");
        select.classList.add("error");
    }
}