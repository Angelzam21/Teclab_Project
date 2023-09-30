let header = document.getElementById('header')
const items = document.querySelectorAll('.item');
let isScrolled = false;


//funciona para los enlaces
items.forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-href');
        window.location.href = url;
    });
});

//funciona al hacer scroll y modifica el nav
window.addEventListener('scroll', ()=>{
    
    let scroll = window.scrollY;
    if (scroll > 10) {
        if (!isScrolled) {
            header.style.backgroundColor = '#56070c';
            for (let i = 0; i < items.length; i++) {
                items[i].style.color = '#FFFFFF'

                items[i].addEventListener('mouseover', () => {
                        items[i].style.color = 'crimson';
                });
            
                items[i].addEventListener('mouseout', () => {
                        items[i].style.color = '#FFFFFF'; // Restaura el color original del texto
                });
            }
            isScrolled = true; 
        }
    } else {
        header.style.backgroundColor = '#f0f2f5';
        for (let i = 0; i < items.length; i++) {
            items[i].style.color = '#000000'

            items[i].addEventListener('mouseover', () => {
                items[i].style.color = 'crimson';
        });

        items[i].addEventListener('mouseout', () => {
                items[i].style.color = '#000000'; // Restaura el color original del texto
        });
        }
        isScrolled = false; 
    }

})

