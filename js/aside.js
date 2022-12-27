const sections = document.querySelectorAll('.aside_section');
const subSections = document.querySelectorAll('.aside_section_body');

sections.forEach(section => {
    section.addEventListener('click', () => {
        if(section.classList.contains('active')) {
            section.classList.remove('active')
        } else {
            section.classList.add('active')
        }
        });
    });

