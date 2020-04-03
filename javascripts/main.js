let curSection = 'about'
function onload() {
    let firstEle = document.querySelector('.nav').children[0]
    curSection = firstEle
    curSection.style.opacity = .5;

}
function sectionSwap(targetSection) {
    if (targetSection !== curSection) {
        curSection.style.opacity = .2
        targetSection.style.opacity = .5
        curSection = targetSection
        let sections = document.querySelector('.sections').children
        let visibleSection = targetSection.id
        for (let section of sections) {
            if (section.className !== visibleSection) {
                section.style.display = 'none'
            }
            else {
                section.style.display = ''
            }
        }
    }
}