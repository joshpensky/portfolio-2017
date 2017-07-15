window.addEventListener("load", () => {
    getFromServer("/projects.php", (response) => {
        console.log(JSON.parse(response));
    });
})


function getFromServer(url, callback) {
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
