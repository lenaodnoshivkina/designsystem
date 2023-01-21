export default function demoLink(style) {
    const links = document.getElementById("demo");
    const isItSize = ["large", "medium", "small"].includes(style);
    if (isItSize) {
        links.classList.contains("large") && links.classList.remove("large");
        links.classList.contains("medium") && links.classList.remove("medium");
        links.classList.contains("small") && links.classList.remove("small");
        links.classList.add(style);
    }
    if (style === "addIcon") {
        if (links.classList.contains("icon")) {
            links.classList.remove("icon");     
        } else {
            links.classList.add("icon");     
        } 
    }
    if (style === "disabled") {
        if (links.classList.contains("disabled")) {
            links.classList.remove("disabled");
        } else {
            links.classList.add("disabled");
        } 
    }
}