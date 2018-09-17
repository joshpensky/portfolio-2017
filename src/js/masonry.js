var columns,
    list,
    projects = [];

/**
 * Initializes the columns, list, and projects variables. Updates the order for the initial window.
 */
window.addEventListener("load", () => {
    list = document.querySelector(".projects-list");
    columns = 0;
    var allProj = document.getElementsByClassName('project');
    for (var i = 0; i < allProj.length; i++) {
        projects.push(allProj[i]);
    }
    updateOrder();
});

/**
 * Updates the order of the masonry layout on window resize.
 */
window.addEventListener("resize", () => {
    updateOrder();
});

/**
 * Gets the current column count of the list.
 *
 * @return {number} the current column count
 */
function getColumns() {
    return window.getComputedStyle(list).columnCount;
}

/**
 * Updates the order of the masonry layout, so the cards are arranged in rows rather than in
 * columns (as they do in pure CSS).
 */
function updateOrder() {
    var numCol = getColumns();
    if (columns == numCol) {
        return;
    }
    columns = numCol;
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    }
    var colShift = 0;
    for (var i = 0; i < columns; i++) {
        console.log("NEW COL");
        for (var j = 0; j < projects.length; j++) {
            if ((j - colShift) % columns == 0) {
                list.appendChild(projects[j]);
                console.log(j);
            }
        }
        colShift++;
    }
}
