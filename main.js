const fileInputElement=document.querySelector(".file-input")
const chooseImgBtnElement=document.querySelector(".choose-img")
const previewImgElement=document.querySelector(".preview-img img")
const filterElement=document.querySelectorAll(".filter button")
const filterNameElement=document.querySelector(".filter-info .name")
const filterSliderElement=document.querySelector(".slider input")
const filterValueElement=document.querySelector(".filter-info .value")
const rotateElement=document.querySelectorAll(".rotate button")

let brightness=100,saturation=100,inversion=0,grayscale=0;
let rotate=0,flipHorizontal=1,flipVertical=1
rotateElement.forEach(Option=>{
    Option.addEventListener("click",()=>{
        if(Option.id === "left"){
            rotate -=90
        }
        else if(Option.id ==="right"){
            rotate +=90
        }
        else if(Option.id ==="horizontal"){
            flipHorizontal=flipHorizontal ===1 ? -1 :1;
        }else{
            flipVertical=flipVertical === 1 ? -1 : 1
        }
        applyFilters()
    })
})

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
        filterNameElement.textContent=Option.textContent

        if(Option.id ==="brightness"){
            filterSliderElement.max="200"
            filterSliderElement.value=brightness
            filterValueElement.textContent=`${brightness}%`
        }else if(Option.id ==="saturation"){
            filterSliderElement.max="200"
            filterSliderElement.value=saturation
            filterValueElement.textContent=`${saturation}%`
        }else if(Option.id ==="inversion"){
            filterSliderElement.max="100"
            filterSliderElement.value=inversion
            filterValueElement.textContent=`${inversion}%`
        }else{
            filterSliderElement.max="100"
            filterSliderElement.value=grayscale
            filterValueElement.textContent=`${grayscale}%`
        }
    })
})

const updateFilter=()=>{
    filterValueElement.textContent=`${filterSliderElement.value}%`
    const selectFilterELement=document.querySelector(".filter .active")

    if(selectFilterELement.id === "brightness"){
        brightness=filterSliderElement.value
    }else if(selectFilterELement.id ==="saturation"){
        saturation=filterSliderElement.value
    }else if(selectFilterELement.id ==="inversion"){
        inversion=filterSliderElement.value
    }else{
        grayscale=filterSliderElement.value
    }

    applyFilters()
}

const applyFilters=()=>{
    previewImgElement.style.transform=`rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`
    previewImgElement.style.filter=`brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`
}
fileInputElement.addEventListener("change",loadImage)
chooseImgBtnElement.addEventListener("click",()=>fileInputElement.click())
filterSliderElement.addEventListener("input",updateFilter)