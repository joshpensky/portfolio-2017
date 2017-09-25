/**
 * Gets all of the project data on window load.
 * @type {XMLHttpRequest}
 */
window.addEventListener("load", () => {
    var topPaint = document.getElementById('top-paint');
    topPaint.classList.remove("hidden");
    setTimeout(() => {topPaint.classList.remove("animate");}, 800);
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
    http.send(data);
}

function loadPage(dataArr) {
    var list = document.querySelector(".projects-list");
    var projects = [];
    for (var i = 0; i < dataArr.length; i++) {
        var item = dataArr[i];
        projects.push(buildProject(item['title'], item['desc_short'], item['url'],
            item['cover'], item['categories']));
    }
    setTimeout(() => {
        var mocks = document.getElementsByClassName('project--mock');
        for (var i = 0; i < mocks.length; i++) {
            mocks[i].classList.add('project--mock--still');
        }
        removeMocks(0, projects);
    }, 500);

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

/**
 * Sets the projects overflow to hidden.
 *
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
function showProjects(index) {
    setTimeout(() => {
        var projects = document.getElementsByClassName('project');
        if (projects.length > index) {
            //projects[index].classList.remove('project--hidden');
            showProjects(index + 1);
        } else {
            document.querySelector('.projects').style.overflow = "hidden";
        }
    }, 0);
}

/**
 * Adds the projects to the page.
 *
 * @param  {[type]} index    [description]
 * @param  {[type]} projects [description]
 * @return {[type]}          [description]
 */
function removeMocks(index, projects) {
    setTimeout(() => {
        var mocks = document.getElementsByClassName('project--mock');
        if (mocks.length > index) {
            //mocks[index].classList.add('project--hidden');
            removeMocks(index + 1, projects);
        } else {
            addProjects(projects);
        }
    }, 0);
}

/**
 * Builds a single project item for the masonry grid.
 * An example project item is as below:
 * <li class="project">
 *   <a href="projects/watchr.html"><div class="project__img"></div></a>
 *   <h4 class="project__title">watchr</h4>
 *   <h5 class="project__desc">Binging shows and movies, for the modern, <span>modern world.</span></h5>
 *   <ul class="project__categ">
 *     <li class="project__categ__item">Branding</li>
 *     <li class="project__categ__item">Identity</li>
 *     <li class="project__categ__item">UI/UX</li>
 *     <li class="project__categ__item">Front-End Dev</li>
 *     <li class="project__categ__item">Back-End Dev</li>
 *   </ul>
 * </li>
 *
 * @param  {string}   titleText  the title of the project
 * @param  {string}   descText   a short description of the project
 * @param  {string}   url        the name of the page the project relies on
 * @param  {string}   imgUrl     the location of the cover image for the project
 * @param  {string[]} categories all of the categories that the project fits under
 * @return {HTMLDomElement}      the project item to be added to the grid
 */
function buildProject(titleText, descText, url, imgUrl, categories) {
    var container = document.createElement("li"),
        link = document.createElement("a"),
        img = document.createElement("div"),
        title = document.createElement("h4"),
        desc = document.createElement("h5"),
        categ = document.createElement("ul");
    container.classList.add("project");
    //container.classList.add("project--hidden");

    link.href = "projects/" + url;
    img.classList.add("project__img");
    img.style.backgroundImage = "url(" + imgUrl + ")";
    link.appendChild(img);

    title.classList.add("project__title");
    title.innerHTML = titleText;

    desc.classList.add("project__desc");
    desc.innerHTML = breakText(descText);

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
}

function breakText(text) {
    var words = text.split(" ");
    var copy = [];
    for (var i = 0, len = words.length; i < len; i++) {
        copy.push(words.pop());
    }
    var count = 0;
    for (var i = 0; i < copy.length; i++) {
        count += copy[i].length;
        if (count > 10) {
            count = i - 1;
            if (count <= 1) {
                count = 2;
            }
            break;
        }
    }
    text = "</span>";
    for (var i = 0; i < copy.length; i++) {
        text = copy[i] + text;
        if (i == count) {
            text = "<span>" + text;
        }
        if (i < copy.length - 1) {
            text = " " + text;
        }
    }
    return text;
}
