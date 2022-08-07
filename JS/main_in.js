const NumberInteractions = 7;
const Seconds = 0.5;
const Transition = (i,NumInt,Sc) => {
     return i / NumInt + Sc;
}
const CalcTimeMov = 7 + 1.7;
const GetSize = () => {
    let oWidth = document.documentElement.clientWidth;
    let oHeight = document.documentElement.clientHeight;
    let content = `Width: ${oWidth} and Height: ${oHeight}`;
    let Resize = document.getElementById("SetGetElements").style;
    //Resize.height = oHeight;
    console.log(content);
}
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
const oAlert = (sendFor) => {
    alert(`Estas accediendo desde ${sendFor}`);
    //console.log(`Estas accediendo desde ${sendFor}`);
}

window.addEventListener('load',() => {
    let Animation = document.getElementById('container-tittle-page');
    let ObjAnimationPos = Animation.getBoundingClientRect().top;
    console.log(ObjAnimationPos);
})
GetSize();
navSlide();
