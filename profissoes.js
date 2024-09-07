let currentPage = 0;
        const pages = document.querySelectorAll('.page');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        function updatePage() {
            pages.forEach((page, index) => {
                page.classList.toggle('active', index === currentPage);
            });
        }

        nextBtn.addEventListener('click', () => {
            if (currentPage < pages.length - 1) {
                currentPage++;
                updatePage();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                updatePage();
            }
        });

        updatePage();