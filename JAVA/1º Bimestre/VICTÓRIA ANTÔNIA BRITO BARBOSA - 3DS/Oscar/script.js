/* ESCUTA O EVENTO DE CARREGAMENTO DO DOM */
document.addEventListener('DOMContentLoaded', function() {
    /* SELECIONA O ELEMENTO DROPDOWN */
    var dropdown = document.querySelector('.dropdown');
    /* ADICIONA UM EVENTO DE CLIQUE AO DROPDOWN */
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // IMPEDE QUE O EVENTO DE CLIQUE SE PROPAGUE PARA OS ELEMENTOS PAI
        this.classList.toggle('active'); // ALTERNA A CLASSE 'ACTIVE' NO DROPDOWN
    });

    /* ADICIONA UM EVENTO DE CLIQUE À JANELA */
    window.addEventListener('click', function(event) {
        /* VERIFICA SE O CLIQUE NÃO FOI DENTRO DO DROPDOWN */
        if (!event.target.closest('.dropdown')) {
            dropdown.classList.remove('active'); // FECHA O DROPDOWN REMOVENDO A CLASSE 'ACTIVE'
        }
    });

    /* ADICIONA UM EVENTO DE CLIQUE PARA CADA LINK DENTRO DO DROPDOWN */
    var dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // IMPEDE O COMPORTAMENTO PADRÃO DO LINK, QUE É NAVEGAR PARA O URL ESPECIFICADO NO ATRIBUTO 'HREF'
            var destination = this.getAttribute('href'); // OBTÉM O DESTINO DO LINK (SE REFERE AOS ELEMENTOS '<a>')
            window.location.href = destination; // REDIRECIONA PARA A PÁGINA CORRESPONDENTE
        });
    });
});

/* SCRIPT JAVASCRIPT PARA CONTROLAR O CARROSSEL */
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

function showItem(index) {
    if (index < 3) {
        currentIndex = totalItems - 3;
    } else if (index >= totalItems) {
        currentIndex = 0;
    }

    const transformValue = -currentIndex * 44;
    document.querySelector('.carousel').style.transform = `translateX(${transformValue}%)`;
}

function nextItem() {
    currentIndex++;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex--;
    showItem(currentIndex);
}

setInterval(nextItem, 3500); // PASSA PARA O PROXIMO ITEM A CADA 3 SEGUNDOS SLIDE
