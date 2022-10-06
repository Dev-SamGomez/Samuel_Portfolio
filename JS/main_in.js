const url_API = 'https://api.github.com/users/Dev-SamGomez/repos';

function queryGithubAPI() {
    return fetch(url_API)
        .then(response => response.json());
}

const Burguer = document.querySelector('.burguer-menu');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const clickNav = document.querySelectorAll('.nav-links a[href^="#"]');

//Modal
const ModalWind = document.querySelector('#ModalView');
const ModalButtons = document.querySelector('.closeModal');

//Buttons Active Modal
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnRepo = document.getElementById('btnRepo');
let idRepo = 0;

const oParallax = document.getElementById('container-general');

const ScrollBtn = document.querySelector('.btn-start').style;

//This is div container about, usage to set and get opacity
const ScrollNavAbout = document.querySelector('.container-about');

//This is div container Home
const ContainerSpace = document.querySelector('.container-space');
//This is div container projects
const ContainerProj = document.querySelector('.container-space-pj');
//This is div container contact
const ContainerContact = document.querySelector('.Container-contact');

const NumberInteractions = 7;
const Seconds = 0.5;

//This will be for the modal carousel input 
const objImputs = {
    imput1: document.getElementById('1'),
    imput2: document.getElementById('2'),
    imput3: document.getElementById('3')
}

const Transition = (i, NumInt, Sc) => {
    return i / NumInt + Sc;
}

const CalcTimeMov = 7 + 1.7;

const ScrollView = () => {
    oParallax.style.animation = '';
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
    ScrollTop > 400 ? ScrollBtn.opacity = 1 : ScrollBtn.opacity = 0;
}

/* const GetSize = () => {
    let oWidth = document.documentElement.clientWidth;
    let oHeight = document.documentElement.clientHeight;
    let content = `Width: ${oWidth} and Height: ${oHeight}`;
    let Resize = document.getElementById("SetGetElements").style;
} */

const navSlide = () => {
    Burguer.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((item, index) => {
            item.style.animation ?
                item.style.animation = '' :
                item.style.animation = `navLinkMovements 0.5s ease forwards ${Transition(index,NumberInteractions,Seconds)}s`;
        });
        Burguer.classList.toggle('toggle');
    });
}

const OnClickList = () => {
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
    Animation.style.animation = 'MoveItem 2s ease-out';
    oParallax.style.animation = 'MoveItemStart 2s ease-out';
    ScrollNavAbout.style.opacity = 0;
    ContainerProj.style.opacity = 0;
    ContainerContact.style.opacity = 0;
    ScrollBtn.opacity = 0;

}

const ParallaxEffect = () => {
    var ScrollTop = document.documentElement.scrollTop;
    var oParallax = document.querySelector('.container-general');
    oParallax.style.transform = ScrollTop * -0.8 == 0 ? '' : `translateY(${ScrollTop * -0.8}px)`;
    let element = document.querySelector('.nav-links li');
    let elementStyle = window.getComputedStyle(element);
    let elementColor = elementStyle.getPropertyValue('opacity');
    if (elementColor == 1 && ScrollTop > 100) {
        nav.classList.remove('nav-active');
        Burguer.classList.remove('toggle');
        navLinks.forEach((item) => {
            item.style.animation = '';
        });
    }
}

function VisitRepo() {
    btnRepo.addEventListener('click', () => {
        queryGithubAPI()
            .then(repos => {
                window.open(repos[idRepo].html_url, '_blank');
            })
            .catch(err => console.error(err));
    });
}

function ModalViewProject(id) {
    ModalWind.style.display = 'flex';
    queryGithubAPI()
        .then(repos => {
            document.getElementById('Insert-Tittle').innerHTML = repos[id].name;
            document.getElementById('Insert-Description').innerHTML = repos[id].description;
            document.getElementById('starts').innerHTML = `${repos[id].stargazers_count} Starts`;
            document.getElementById('watch').innerHTML = `${repos[id].watchers} Watching`;
            document.getElementById('forks').innerHTML = `${repos[id].forks_count} Forks`;
            idRepo = id;
        })
        .catch(err => console.error(err));
}

const Close_Modal_Window = () => {
    ModalButtons.addEventListener('click', () => ModalWind.style.display = 'none');
}

const CheckOutModal = () => {
    ModalWind.onclick = (e) => {
        ModalWind.style.display = e.target == ModalWind ? 'none' : ModalWind.style.display;
    }
}

const ClickImputsModal = () => {
    Object.entries(objImputs)
        .forEach(key => {
            key.map((vl, id) => {
                if (id == 1) {
                    vl.addEventListener('click', () => {
                        //console.log(vl);
                        if (document.querySelector('.slide').style.animationName = 'none'){
                        setTimeout(() => {
                            document.querySelector('.slide').style.animationName = 'autoplay';
                            document.querySelector('.slide').style.animationDuration = '6.5s';
                            document.querySelector('.slide').style.animationDirection = 'alternate';
                            document.querySelector('.slide').style.animationFillMode = 'forwards';
                            document.querySelector('.slide').style.animationIterationCount = 'infinite';
                            document.querySelector('.slide').style.animationObjectFit = 'cover';
                        }, 10000);
                    }
                    });
                }
            });
        });
}

window.addEventListener('load', OnLoad)
window.addEventListener('scroll', ScrollView)
window.addEventListener('scroll', ParallaxEffect)

navSlide();
OnClickList();
Close_Modal_Window();
CheckOutModal();
VisitRepo();
ClickImputsModal();