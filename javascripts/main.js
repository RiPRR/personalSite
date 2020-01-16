let curSection = 'about'
function onload() {
    let firstEle = document.querySelector('.nav').children[0]
    curSection = firstEle
    curSection.style.opacity = .5;  
}
function sectionSwap(targetSection){
    if(targetSection !== curSection){
        curSection.style.opacity = .2
        targetSection.style.opacity = .5
        curSection = targetSection
    }

}