function validationform() {
    var name = document.forms['myForm']["fname"].value;
    console.log(name);
    console.log("fucntion run")
    return false;
}

function reset() {
    let reset = document.querySelectorAll('.reset')
    reset.forEach((r) => {
        r.value = ''
    })
}


const sections = document.querySelectorAll('section[id]')

function scrollActive() {

    let current = ''
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id')

        }
    })
    console.log(current)

}

window.addEventListener('scroll', scrollActive)