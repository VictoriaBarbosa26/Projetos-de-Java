    /* SCRIPT JAVASCRIPT PARA CONTROLAR O CARROSSEL */
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;

    function showItem(index) {
        if (index < 0) {
            currentIndex = totalItems - 1;
        } else if (index >= totalItems) {
            currentIndex = 0;
        }

        const transformValue = -currentIndex * 100;
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

    setInterval(nextItem, 3000); // PASSA PARA O PROXIMO ITEM A CADA 3 SEGUNDOS SLIDE	

