export default function copyright () {

    const htmlFragment = `
            <p class="gray">Учебный проект ИТМО, 2022-23</p>
            <p class="subtext gray">Авторы: Елисеева Елена, Одношивкина Елена</p>
    `

    const mainBlock = document.querySelector(".content_main_block");

    const copyright = document.createElement("div");
    copyright.classList.add("col_content_footer")

    copyright.innerHTML = htmlFragment;

    mainBlock.append(copyright)
}

