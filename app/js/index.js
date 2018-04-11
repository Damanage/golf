//Slider func
let currentSlide = 1;

let nextSlide = (n) => {
    slideMachine(currentSlide += n, 'slide')
}
let footNextSlide = (n) => {
    slideMachine(currentSlide += n, 'f-slide')
};

let slideMachine = (n, classN) => {
    let elem = document.getElementsByClassName(classN);
    if(n>elem.length)
        currentSlide = 1;
    if(n<1)
        currentSlide = elem.length
    for(let i =0; i<elem.length; i++){
        elem[i].style.display = 'none';
        elem[i].style.opacity = '0';
    }
    elem[currentSlide-1].style.display = 'flex';
    setTimeout(()=>{
        elem[currentSlide-1].style.opacity = '1';
    } , 200);
    
}

slideMachine(currentSlide, 'slide');
slideMachine(currentSlide, 'f-slide');