/**
 * Gets all of the project data on window load.
 * @type {XMLHttpRequest}
 */
window.addEventListener("load", () => {
    getFromServer("/php/projects.php", (response) => {
        console.log(JSON.parse(response));
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
