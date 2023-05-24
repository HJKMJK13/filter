const fileInputElement=document.querySelector(".file-input")
const chooseImgBtnElement=document.querySelector(".choose-img")
const previewImgElement=document.querySelector(".preview-img img")
const filterElement=document.querySelectorAll(".filter button")

const loadImage=()=>{
    let file=fileInputElement.files[0]
    console.log(file)
    if(!file)return
    previewImgElement.src=URL.createObjectURL(file)
    previewImgElement.addEventListener("load",()=>{
        document.querySelector(".container").classList.remove("disabled")
    })
}

filterElement.forEach(Option=>{
    Option.addEventListener("click",()=>{
        document.querySelector(".filter .active").classList.remove("active")
        Option.classList.add("active")
    })
})
fileInputElement.addEventListener("change",loadImage)
chooseImgBtnElement.addEventListener("click",()=>fileInputElement.click())