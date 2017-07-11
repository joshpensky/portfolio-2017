function send() {
    var sendBtn = document.querySelector(".send");
    if (!sendBtn.classList.contains("send--blank") && !sendBtn.classList.contains("send--animate")) {
        var wrapper = sendBtn.querySelector(".wrapper");
        sendBtn.classList.add("send--animate");
        setTimeout(() => {
            sendBtn.classList.remove("send--animate");
            sendBtn.classList.add("send--blank");
            wrapper.innerHTML = "thank you";
            setTimeout(() => {
                sendBtn.classList.add("send--sent");
            }, 40);
        }, 1600);
    }
}
