const Burguer = document.querySelector('.burguer-menu');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const clickNav = document.querySelectorAll('.nav-links a[href^="#"]');
const ScrollNav = document.querySelector('.about');
const ContainerSpace = document.querySelector('.container-space');
const ContainerProj = document.querySelector('.container-space-pj');
const NumberInteractions = 7;
const Seconds = 0.5;

const Transition = (i,NumInt,Sc) => {
     return i / NumInt + Sc;
}

var ObjSections = {
    AboutMe: document.querySelector('.about'),
    Projects: document.querySelector('.container-space-pj'),
    ContactMe: document.querySelector('.Container-contact')
}

const CalcTimeMov = 7 + 1.7;

const ScrollView = () => {
    let ScrollTop = document.documentElement.scrollTop;
    let Bottom = ContainerSpace.offsetHeight / 2;
    let IsOpacity = ScrollNav.style.opacity;
    //console.log(`This is qty of scrollTop = ${ScrollTop} and this is qty of heigth relation on window and div About ${Bottom}`);
    ScrollNav.style.opacity = IsOpacity == 1 ? 1 : ScrollTop >= Bottom ? 1 : 0; 
    ScrollNav.classList.add('viewTop');
}

const GetSize = () => {
    let oWidth = document.documentElement.clientWidth;
    let oHeight = document.documentElement.clientHeight;
    let content = `Width: ${oWidth} and Height: ${oHeight}`;
    let Resize = document.getElementById("SetGetElements").style;
    //Resize.height = oHeight;
    console.log(content);
}

const navSlide = () => { 
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

const OnClick = () => {
    clickNav.forEach(links => {
        links.addEventListener('click',() => {
            nav.classList.remove('nav-active');
            Burguer.classList.remove('toggle');
            navLinks.forEach((item,index) => {
                item.style.animation = '';
            });
        });
    });
}

const OnLoad = () => {
    let Animation = document.getElementById('container-tittle-page');
    let Animatio2 = document.getElementById('Profile-Pic');
    //let ObjAnimationPos = Animation.getBoundingClientRect().right;
    //let SizeWindow = window.innerHeight;
    //console.log(`${ObjAnimationPos} + ${SizeWindow}`);
    Animation.style.animation = 'MoveItem 2s ease-out';
    Animatio2.style.animation = 'MoveItemPic 2s ease-out';
    ScrollNav.style.opacity = 0;
}

window.addEventListener('load',OnLoad)
window.addEventListener('scroll',ScrollView)

GetSize();
navSlide();
OnClick();
console.log(ObjSections);
