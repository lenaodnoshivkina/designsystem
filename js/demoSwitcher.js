export default function demoSwitcher(style) {
    const buttons = document.getElementById("demo").querySelectorAll("button");

    buttons.forEach(btn => {
        btn.classList.contains("large") && btn.classList.remove("large");
        btn.classList.contains("medium") && btn.classList.remove("medium");
        btn.classList.contains("small") && btn.classList.remove("small");
        btn.classList.add(style);
    });
}