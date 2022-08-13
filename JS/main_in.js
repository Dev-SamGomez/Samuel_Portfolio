const Burguer = document.querySelector('.burguer-menu');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const clickNav = document.querySelectorAll('.nav-links a[href^="#"]');

const ScrollBtn = document.querySelector('.btn-start').style;

//This is div container about, usage to set and get opacity
const ScrollNavAbout = document.querySelector('.about');

//This is div container Home
const ContainerSpace = document.querySelector('.container-space');
//This is div container projects
const ContainerProj = document.querySelector('.container-space-pj');
//This is div container contact
const ContainerContact = document.querySelector('.Container-contact');

const NumberInteractions = 7;
const Seconds = 0.5;

const Transition = (i, NumInt, Sc) => {
    return i / NumInt + Sc;
}

const CalcTimeMov = 7 + 1.7;

const ScrollView = () => {
    var ScrollTop = document.documentElement.scrollTop;
    var Bottom = ContainerSpace.offsetHeight / 2;
    var IsOpacity = ScrollNavAbout.style.opacity;

    //Visible About
    ScrollNavAbout.style.opacity = IsOpacity == 1 ? 1 : ScrollTop >= Bottom ? 1 : 0;
    ScrollNavAbout.classList.add('viewTop');
    IsOpacity = 0;
    Bottom = 0;
    //Visible Projects
    Bottom = ScrollNavAbout.offsetHeight / 2;
    IsOpacity = ContainerProj.style.opacity;
    ContainerProj.style.opacity = IsOpacity == 1 ? 1 : ScrollTop >= Bottom ? 1 : 0;
    ContainerProj.classList.add('viewTop');
    IsOpacity = 0;
    Bottom = 0;
    //Visible Contact
    Bottom = ContainerProj.offsetHeight / 2;
    IsOpacity = ContainerContact.style.opacity;
    ContainerContact.style.opacity = IsOpacity == 1 ? 1 : ScrollTop >= Bottom ? 1 : 0;
    ContainerContact.classList.add('viewTop');
    console.log(ScrollTop);
    ScrollTop > 400 ? ScrollBtn.opacity = 1 : ScrollBtn.opacity = 0;
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
        navLinks.forEach((item, index) => {
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
        links.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            Burguer.classList.remove('toggle');
            navLinks.forEach((item, index) => {
                item.style.animation = '';
            });
        });
    });
}

const OnLoad = () => {
    let Animation = document.getElementById('container-tittle-page');
   // let Animatio2 = document.getElementById('Profile-Pic');
    Animation.style.animation = 'MoveItem 2s ease-out';
   // Animatio2.style.animation = 'MoveItemPic 2s ease-out';
    ScrollNavAbout.style.opacity = 0;
    ContainerProj.style.opacity = 0;
    ContainerContact.style.opacity = 0;
    ScrollBtn.opacity = 0;
}

window.addEventListener('load', OnLoad)
window.addEventListener('scroll', ScrollView)

GetSize();
navSlide();
OnClick();

//console.log(ObjSections.AboutMe);
//console.log(ObjSections.Projects);
//console.log(ObjSections.ContactMe);