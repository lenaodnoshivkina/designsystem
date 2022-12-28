const sections = document.querySelectorAll('.aside_section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        if(section.classList.contains('active')) {
            section.classList.remove('active')
        } else {
            section.classList.add('active')
        }
        });
    });

