const content = document.querySelector("#input");
const generateBtn = document.querySelector(".container button");
const qrImage = document.querySelector(".qr-image");
const qrCodeContainer = document.querySelector(".qr-code");
const clearQrBtn = document.querySelector("#clear-qr");

generateBtn.addEventListener("click",()=>{
    if(content.value != "" || content.value > 0){
    qrCodeContainer.style.display = "block";
    qrCodeContainer.style.opacity = "1";
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + content.value;
    }else{
        content.classList.add("error");
        setTimeout(() => {
        content.classList.remove("error");
        }, 1000);
    }

    })

clearQrBtn.addEventListener("click",()=>{
    qrCodeContainer.style.display = "none";

})