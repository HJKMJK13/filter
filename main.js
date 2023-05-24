const fileInputElement=document.querySelector(".file-input")
const chooseImgBtnElement=document.querySelector(".choose-img")

const loadImage=()=>{
    let file=fileInputElement.files[0]
    console.log(file)
    if(!file)return
}
fileInputElement.addEventListener("change",loadImage)
chooseImgBtnElement.addEventListener("click",()=>fileInputElement.click())