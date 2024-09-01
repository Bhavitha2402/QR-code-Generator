const container=document.querySelector(".container");
const  generator=document.querySelector(".generator");
let outer=document.querySelector(".outer");
let qrImg=document.querySelector(".qrImg");
let inputBox=document.querySelector(".input-box");

function Generator(){
    if(inputBox.value===""){
        alert("ENTER SOMETHING TO GENERATE QR CODE");
    }else{
qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputBox.value;
    }
};