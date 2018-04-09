console.log('this shit is working')
let currentSlide = 1;


let nextSlide = (n) => {
    slideMachine(currentSlide += n)
}

let slideMachine = (n) => {
    let elem = document.getElementsByClassName('slide');
    if(n>elem.length)
        currentSlide = 1;
    if(n<1)
        currentSlide = elem.length
    for(let i =0; i<elem.length; i++){
        elem[i].style.display = 'none';
    }
    elem[currentSlide-1].style.display = 'block';
}

slideMachine(currentSlide);