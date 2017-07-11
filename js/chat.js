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
    if (!checkFullName() || !checkEmail()) {
        return false;
    }
    fullName.disabled = true;
    email.disabled = true;
    message.disabled = true;
    sendMessage();
    animateSend();
}

function checkFullName() {
    var name = fullName.value.trim();
    var label = document.querySelector("#fullNameErr");
    if (name.split(" ").length > 1) {
        fullName.classList.remove("error");
        label.innerHTML = "";
        return true;
    }
    fullName.focus();
    fullName.classList.add("error");
    label.innerHTML = "Please enter your first and last name.";
    return false;
}

function checkEmail() {
    var address = email.value.trim();
    var label = document.querySelector("#emailErr");
    var username = address.split("@");
    if (username.length == 2) {
        var service = username[1].split(".");
        if (service.length > 1 && service[1] != "") {
            email.classList.remove("error");
            label.innerHTML = "";
            return true;
        }
    }
    if (fullName !== document.activeElement) {
        email.focus();
    }
    email.classList.add("error");
    label.innerHTML = "Please enter a valid email address.";
    return false;
}

function sendMessage() {
    var http = new XMLHttpRequest();
    var url = "/chat.php";//your url to the server side file that will receive the data.
    var data = "fullname=" + fullName.value.trim() + "&email=" + email.value.trim()
        + "&message=" + getMessage();
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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
