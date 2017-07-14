var fullName,
    email,
    message,
    sendBtn;

window.addEventListener("load", () => {
  fullName = document.querySelector("#fullName");
  email = document.querySelector("#email");
  message = document.querySelector("#message");
  sendBtn = document.querySelector(".send");
  fullName.addEventListener("keyup", () => { checkTyped(fullName); });
  email.addEventListener("keyup", () => { checkTyped(email); });
  message.addEventListener("keyup", () => { checkTyped(message); });
});

/**
 * Checks the value of an element to see if the user has typed anything in it. If so, adds
 * the .typed class to the element; otherwise, removes it.
 *
 * @param {element} elem   the element to be checked
 */
function checkTyped(elem) {
  if (elem.value != "") {
    elem.classList.add("typed");
    return;
  }
  elem.classList.remove("typed");
}

/**
 * Sends the data currently in the full name, email, and message fields to the server-side file.
 * If the response is true, disables the input elements and animates the send button. If the
 * response is false, updates either the full name or email element to reflect the error.
 */
function send() {
  getFromServer("/chat.php",
    "fullname=" + fullName.value.trim() + "&email=" + email.value.trim() + "&message=" + getMessage(),
    (response) => {
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

/**
 * Updates the full name element and its label based on the given variable. If true, removes
 * error styling; otherwise, adds error styling and displays the error message.
 *
 * @param {boolean} pass   true if the given email was valid, false otherwise
 */
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

/**
 * Updates the email element and its label based on the given variable. If true, removes
 * error styling; otherwise, adds error styling and displays the error message.
 *
 * @param {boolean} pass   true if the given email was valid, false otherwise
 */
function updateEmail(pass) {
  var label = document.querySelector("#emailErr");
  if (pass) {
    email.classList.remove("error");
    label.innerHTML = "";
  } else {
    email.focus();
    email.classList.add("error");
    label.innerHTML = "Please enter a valid email address.";
  }
}

/**
 * Passes in the given data from a server-side file at the specified url, and sends the response
 * text into the given callback function.
 *
 * @param {string}   url        the url to the server-side file that will receive the dara
 * @param {string}   data       the data to be sent to the server
 * @param {function} callback   the function to be called with the response text as the argument
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

/**
 * Gets the message currently within the message element, or the default message.
 *
 * @return {string} the user-typed message, or the default message if nothing typed
 */
function getMessage() {
  var msg = message.value.trim();
  if (msg == "") {
    return "I would like to work with you!";
  }
  return msg;
}

/**
 * Animates the send button.
 */
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
