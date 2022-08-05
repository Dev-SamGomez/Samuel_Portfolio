const NumberInteractions = 7;
const Seconds = 0.5;
const Transition = (i,NumInt,Sc) => {
     return i / NumInt + Sc;
}
const CalcTimeMov = 7 + 1.7;
const navSlide = () => {
    const Burguer = document.querySelector('.burguer-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    Burguer.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((item,index) => {
            item.style.animation ?
            item.style.animation = '' :
            item.style.animation = `navLinkMovements 0.5s ease forwards ${Transition(index,NumberInteractions,Seconds)}s`;
            //console.log(index / CalcTimeMov);
        });
        Burguer.classList.toggle('toggle');
    });     
}
navSlide();
