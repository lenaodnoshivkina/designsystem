export default function navigation (sectionName) {

    const navHtmlFragment = `
        <a href="../index.html">
            <img class="logo" src="../img/logo.svg" alt=""/>
        </a>
        <div class="nav_wrapper">
            <div class="nav_section" data-label="about">
                <div class="nav_section_header">
                    <p>О дизайн-системе</p>
                    <img class="nav_section_arrow" src="../img/nav_arrow.png" alt=""/>
                </div>
                <div class="nav_section_body">
                    <nav class="nav_subsections">
                        <ul>
                            <li><a href="goal.html">Цели и задачи</a></li>
                            <li><a href="principles.html">Принципы</a></li>
                            <li><a href="team.html">Команда</a></li>
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
                            <li><a href="text-styles.html">Текстовые стили</a></li>
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
                        <li><a href="buttons.html">Кнопки</a></li>
                        <li><a href="links.html">Ссылки</a></li>
                        <li><a href="inputs.html">Поля ввода</a></li>
                        <li><a href="dropdowns.html">Выпадающие списки</a></li>
                        <li><a href="radiobuttons.html">Радиокнопки</a></li>
                        <li><a href="checkboxes.html">Чекбоксы</a></li>
                        <li><a href="togles.html">Тоглы</a></li>
                        <li><a href="switches.html">Переключатели</a></li>
                        <li><a href="tabs.html">Вкладки</a></li>
                        <li><a href="paging.html">Пагинация</a></li>
                        <li><a href="progress-bar.html">Индикаторы выполнения</a></li>
                        <li><a href="tooltips.html">Подсказки</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="nav_section" data-label="modules">
                <div class="nav_section_header">
                    <p>Модули</p>
                    <img class="nav_section_arrow" src="../img/nav_arrow.png" alt=""/>
                </div>
                <div class="nav_section_body">
                <nav class="nav_subsections">
                    <ul>
                    <li><a href="template-grid.html">Сетка</a></li>
                    <li><a href="header.html">Шапка</a></li>
                    <li><a href="navigation.html">Навигация</a></li>
                    <li><a href="footer.html">Подвал</a></li>
                    </ul>
                </nav>
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

