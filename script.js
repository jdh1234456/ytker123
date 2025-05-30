const  registerButton = document.querySelector("#register_button");
const  registrationWindow = document.querySelector(".registration-window");
const  registrationWindowCLoseButton = document.querySelector(".registration-window .close-btn");


registerButton.addEventListener("click", () => {
    registrationWindow.classList.toggle("hidden");
})

registrationWindowCLoseButton.addEventListener("click", () => {
    registrationWindow.classList.add("hidden");
})

const  complaintButton = document.querySelector("#complaint_button");
const  complaintWindow = document.querySelector("complaint-window");
const  complaintWindowCLoseButton = document.querySelector(".complaint-window .close-btf");


complaintButton.addEventListener("click", () => {
    complaintWindow.classList.toggle(".hidden2");
})

complaintWindowCLoseButton.addEventListener("click", () => {
    complaintWindow.classList.add(".hidden2");
})