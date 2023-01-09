export default function navigation (sectionName) {

    const navHtmlFragment = `
        <img class="logo" src="../img/logo.png" alt=""/>
        <div class="nav_wrapper">
            <div class="nav_section" data-label="about">
                <div class="nav_section_header">
                    <p>О дизайн системе</p>
                    <img class="nav_section_arrow" src="../img/nav_arrow.png" alt=""/>
                </div>
                <div class="nav_section_body">
                    <nav class="nav_subsections">
                        <ul>
                            <li><a href="goal.html">Цель</a></li>
                            <li><a href="">Задачи</a></li>
                            <li><a href="">Принципы</a></li>
                            <li><a href="">Дизайн-видение</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="nav_section" data-label="firmstyle">
                <div class="nav_section_header">
                    <p>Фирменный стиль</p>
                    <img class="nav_section_arrow" src="../img/nav_arrow.png" alt=""/>
                </div>
                <div class="nav_section_body">
                <nav class="nav_subsections">
                    <ul>
                        <li><a href="text_styles.html">Текстовые стили</a></li>
                        <li><a href="colors.html">Цвета</a></li>
                        <li><a href="icons.html">Иконки</a></li>
                        <li><a href="grid.html">Модуль и сетка</a></li>
                        <li><a href="margins.html">Отступы и выравнивание</a></li>
                    </ul>
                </nav>
            </div>
            </div>
            <div class="nav_section" data-label="components">
                <div class="nav_section_header">
                    <p>Компоненты</p>
                    <img class="nav_section_arrow" src="../img/nav_arrow.png" alt=""/>
                </div>
                <div class="nav_section_body">
                    <nav class="nav_subsections">
                        <ul>
                        <li><a href="/service-1/">Кнопки</a></li>
                        <li><a href="/service-1/">Поля ввода</a></li>
                        <li><a href="/service-1/">Фильтры</a></li>
                        <li><a href="/service-1/">Пагинация</a></li>
                        <li><a href="/service-1/">Оповещения</a></li>
                        <li><a href="/service-1/">Вкладки</a></li>
                        <li><a href="/service-1/">Индикаторы выполнения</a></li>
                        <li><a href="/service-1/">Ползунки</a></li>
                        <li><a href="/service-1/">Подсказки</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="nav_section" data-label="modules">
                <div class="nav_section_header">
                    <p>Модули</p>
                    <img class="nav_section_arrow" src="../img/nav_arrow.png" alt=""/>
                </div>
            </div>
        </div>
    `

    const navElem = document.querySelector("nav");

    navElem.innerHTML = navHtmlFragment;

    const sections = document.querySelectorAll('.nav_section');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            if(section.classList.contains('active')) {
                section.classList.remove('active')
            } else {
                section.classList.add('active')
            }
            });
        });

    if (sectionName) {
        sections.forEach(section => {
            if (section.getAttribute("data-label") === sectionName) {
                section.classList.add('active')
            }
        })
    }
    
}
