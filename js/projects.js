/**
 * Gets all of the project data on window load.
 * @type {XMLHttpRequest}
 */
window.addEventListener("load", () => {
    getFromServer("/php/projects.php", "", (response) => {
        loadPage(JSON.parse(response));

    });
})

/**
 * Retrieves data from the server-side file at the given url, then calls the given function with
 * the response as the sole argument.
 *
 * @param {string}   url        the url to the server-side file that will retrieve the dara
 * @param {string}   data       the data to be sent to the server
 * @param {Function} callback   the function to be called with the response text as the argument
 */
function getFromServer(url, data, callback) {
    var http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            callback(http.responseText);
        }
    };
    http.send("");
}

function loadPage(dataArr) {
    var list = document.querySelector(".projects-list");
    var projects = [];
    for (var i = 0; i < dataArr.length; i++) {
        var item = dataArr[i];
        projects.push(buildProject(item['title'], item['desc-short'], 'watchr',
            item['cover'], item['categories']));
    }
    //projects = updateOrder(projects);
    removeMocks(0, projects);
}

var columns = 0;

/**
 * Gets the current column count of the list.
 *
 * @return {number} the current column count
 */
function getColumns(list) {
    return window.getComputedStyle(list).columnCount;
}

/**
 * Updates the order of the masonry layout, so the cards are arranged in rows rather than in
 * columns (as they do in pure CSS).
 */
function updateOrder(projects) {
    var list = document.querySelector(".projects-list");
    var numCol = getColumns(list);
    if (columns == numCol) {
        return;
    }
    var reordered = [];
    columns = numCol;
    var colShift = 0;
    for (var i = 0; i < columns; i++) {
        for (var j = 0; j < projects.length; j++) {
            if ((j - colShift) % columns == 0) {
                reordered.push(projects[j]);
            }
        }
        colShift++;
    }
    return reordered;
}


function addProjects(projects) {
    var list = document.querySelector(".projects-list");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    for (var elem in projects) {
        list.appendChild(projects[elem]);
    }
    showProjects(0);
}

function showProjects(index) {
    setTimeout(() => {
        var projects = document.getElementsByClassName('project');
        if (projects.length > index) {
            projects[index].classList.remove('project--hidden');
            showProjects(index + 1);
        } else {
            document.querySelector('.projects').style.overflow = "hidden";
        }
    }, 200);
}

function removeMocks(index, projects) {
    setTimeout(() => {
        var mocks = document.getElementsByClassName('project--mock');
        if (mocks.length > index) {
            mocks[index].classList.add('project--hidden');
            removeMocks(index + 1, projects);
        } else {
            addProjects(projects);
        }
    }, 200);
}

function buildProject(titleText, descText, url, imgUrl, categories) {
    var container = document.createElement("li"),
        link = document.createElement("a"),
        img = document.createElement("div"),
        title = document.createElement("h4"),
        desc = document.createElement("h5"),
        categ = document.createElement("ul");
    container.classList.add("project");
    container.classList.add("project--hidden");

    link.href = "projects/" + url + ".html";
    img.classList.add("project__img");
    img.style.backgroundImage = "url(" + imgUrl + ")";
    link.appendChild(img);

    title.classList.add("project__title");
    title.innerHTML = titleText;

    desc.classList.add("project__desc");
    desc.innerHTML = descText;

    categ.classList.add("project__categ");
    for (var i = 0; i < categories.length; i++) {
        var item = document.createElement("li");
        item.classList.add("project__categ__item");
        item.innerHTML = categories[i];
        categ.appendChild(item);
    }

    container.appendChild(link);
    container.appendChild(title);
    container.appendChild(desc);
    container.appendChild(categ);

    return container;


    /**
    <li class="project">
        <a href="projects/watchr.html"><div class="project__img" style="background-image: url('img/projects/watchr/cover.png');"></div></a>
        <h4 class="project__title">watchr</h4>
        <h5 class="project__desc">Binging shows and movies, for the modern, <span>modern world.</span></h5>
        <ul class="project__categ">
            <li class="project__categ__item">Branding</li>
            <li class="project__categ__item">Identity</li>
            <li class="project__categ__item">UI/UX</li>
            <li class="project__categ__item">Front-End Dev</li>
            <li class="project__categ__item">Back-End Dev</li>
        </ul>
    </li>
     */
}
