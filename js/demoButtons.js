export default function demoButton(style) {
    const buttons = document.getElementById("demo");
    const isItSize = ["large", "medium", "small"].includes(style);
    if (isItSize) {
        buttons.classList.contains("large") && buttons.classList.remove("large");
        buttons.classList.contains("medium") && buttons.classList.remove("medium");
        buttons.classList.contains("small") && buttons.classList.remove("small");
        buttons.classList.add(style);
    }
    if (style === "addIcon") {
        if (buttons.classList.contains("icon")) {
            buttons.classList.remove("icon");     
        } else {
            buttons.classList.add("icon");     
        } 
    }
    if (style === "changeType") {
        if (buttons.classList.contains("default")) {
            buttons.classList.remove("default");
            buttons.classList.add("outline");
        } else {
            buttons.classList.remove("outline");
            buttons.classList.add("default");
        }       
    }
}