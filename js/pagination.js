// JavaScript Document
    const currentPage = window.location.href.match(/index1\.3(?:\.(\d+))?\.html/);
    const pageNum = currentPage && currentPage[1] ? parseInt(currentPage[1], 10) : 1;

    const prevPageLink = document.getElementById("prevPage");
    const nextPageLink = document.getElementById("nextPage");

    if (pageNum > 1) {
        prevPageLink.setAttribute("href", pageNum === 2 ? "index1.3.html" : `index1.3.${pageNum - 1}.html`);
    } else {
        prevPageLink.classList.add("disabled"); 
    }

    if (pageNum < 4) {
        nextPageLink.setAttribute("href", `index1.3.${pageNum + 1}.html`);
    } else {
        nextPageLink.classList.add("disabled");
    }

    document.querySelectorAll('.pagination .page-link').forEach(link => {
        if (parseInt(link.getAttribute('data-page'), 10) === pageNum) {
            link.classList.add("active");
        }
    });
