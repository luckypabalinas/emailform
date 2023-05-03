const form = document.querySelector("form"),
statusTxt = document.querySelector(".status");

form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest();
    xhr.open("post" , "message.php", true);
    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            console.log(response);
            statusTxt.innerHTML = "Message sent successfully!";
        } else {
            statusTxt.innerHTML = "There was an error sending the message.";
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
