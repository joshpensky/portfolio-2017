var fullName;
var email;
var message;
var sendBtn;

window.addEventListener("load", () => {
    fullName = document.querySelector("#fullName");
    email = document.querySelector("#email");
    message = document.querySelector("#message");
    sendBtn = document.querySelector(".send");
    fullName.addEventListener("keyup", () => { checkTyped(fullName); });
    email.addEventListener("keyup", () => { checkTyped(email); });
    message.addEventListener("keyup", () => { checkTyped(message); });
});

function checkTyped(elem) {
    if (elem.value != "") {
        elem.classList.add("typed");
        return;
    }
    elem.classList.remove("typed");
}

function send() {
    var name = fullName.value.trim();
    var address = email.value.trim();
    getFromServer("/chat.php",
        "fullname=" + name + "&email=" + address + "&message=" + getMessage(),
        (response) => {
            console.log(response);
            var resp_arr = response.split(" ");
            if (resp_arr[0] == 'true') {
                updateFullName(true);
                updateEmail(true);
                fullName.disabled = true;
                email.disabled = true;
                message.disabled = true;
                animateSend();
            } else if (resp_arr[1] == 'fullname') {
                updateFullName(false);
            } else if (resp_arr[1] == 'email') {
                updateFullName(true);
                updateEmail(false);
            }
        });
}

function updateFullName(pass) {
    var label = document.querySelector("#fullNameErr");
    if (pass) {
        fullName.classList.remove("error");
        label.innerHTML = "";
    } else {
        fullName.focus();
        fullName.classList.add("error");
        label.innerHTML = "Please enter your first and last name.";
    }
}

function updateEmail(pass) {
    var label = document.querySelector("#emailErr");
    if (pass) {
        email.classList.remove("error");
        label.innerHTML = "";
    } else {
        if (fullName !== document.activeElement) {
            email.focus();
        }
        email.classList.add("error");
        label.innerHTML = "Please enter a valid email address.";
    }
}

/**
 *
 * @param url        the url to the server-side file that will receive the dara
 * @param data       the data to be sent to the server
 * @param callback   the function to be called with the response text
 * @return the response text from the server
 */
function getFromServer(url, data, callback) {
    var http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            callback(http.responseText);
        }
    };
    http.send(data);
}

function getMessage() {
    var msg = message.value.trim();
    if (msg == "") {
        return "I would like to work with you!";
    }
    return msg;
}

function animateSend() {
    if (!sendBtn.classList.contains("send--blank") && !sendBtn.classList.contains("send--animate")) {
        var wrapper = sendBtn.querySelector(".wrapper");
        sendBtn.classList.add("send--animate");
        setTimeout(() => {
            sendBtn.classList.remove("send--animate");
            sendBtn.classList.add("send--blank");
            wrapper.innerHTML = "thank you!";
            setTimeout(() => {
                sendBtn.classList.add("send--sent");
            }, 40);
        }, 1600);
    }
}
