//menu hamburguer
let menuOpener= document.querySelector('.menu-opener')
let nav = document.querySelector('header nav')

menuOpener.addEventListener('click', ()=>{
    if (nav.classList.contains('opened')){
        nav.classList.remove('opened')
        menuOpener.querySelector('.close-icon').style.display='none';
        menuOpener.querySelector('.hamburguer-icon').style.display='flex';
    } else{
        nav.classList.add('opened')
        menuOpener.querySelector('.close-icon').style.display='flex';
        menuOpener.querySelector('.hamburguer-icon').style.display='none';
    }
});




//testemonials
let testemonials =[{quote:'"Sempre busco presentes únicos e especiais, e encontrei na floricultura o arranjo de kiku perfeito para homenagear meu avô. As flores eram exuberantes e o arranjo transmitiu todo o respeito e admiração que sinto por ele." - Carlos Roberto', origin:'p1.jpg' },
    {quote:'"Fiquei encantada com o arranjo de sakura que comprei para o aniversário da minha mãe. As flores eram frescas e delicadas, e o arranjo transmitiu toda a beleza e o significado da cultura japonesa. Minha mãe adorou!" - Ana Paula', origin:'p2.jpg' }, 
    {quote:'"Comprei um bonsai de pinheiro para decorar meu escritório e adorei a qualidade da planta e o cuidado com a entrega. O bonsai transmite calma e serenidade, criando um ambiente perfeito para trabalhar." - Dandara Silva', origin:'p3.jpg' }, 
    {quote:'"Adorei a experiência de criar um ikebana personalizado com a ajuda dos especialistas da floricultura. Eles me guiaram na escolha das flores e me explicaram o significado de cada elemento do arranjo. O resultado final ficou incrível!" - Mariana Silva', origin:'p4.jpg' }
];
let testemonialQuote = document.querySelector('.testemonials .quote')
let testemonialIcon = document.querySelector('.testemonials .icons')

for(let tindex in testemonials){
    let img = document.createElement('img')
    img.setAttribute('src','./assets/images/'+testemonials[parseInt(tindex)].origin)
    img.style.cursor='pointer'
    img.addEventListener('click', ()=>fillTestemonial(parseInt(tindex)))
    testemonialIcon.appendChild(img)
}

let currentTestemonial = 0;
let testemonialTimer;

const fillTestemonial= (index)=>{
    clearTimeout(testemonialTimer)
    currentTestemonial = index
    testemonialQuote.innerHTML = testemonials[currentTestemonial].quote
    let imgs = testemonialIcon.querySelectorAll('img')
    for(let img of imgs) img.style.opacity=0.2
    imgs[currentTestemonial].style.opacity=1
    testemonialTimer = setTimeout(nextTestemonial,3000)
}
const nextTestemonial = () =>{
    if (testemonials[currentTestemonial]+1){
        fillTestemonial(currentTestemonial+1)
    }else{
        fillTestemonial(0)
    }
}
nextTestemonial();

let currentFaq = 0

let faqItems = document.querySelectorAll('.faq .accordion .item')

faqItems.forEach((el, index)=>{
    el.querySelector('.title').addEventListener('click', ()=> setFaq(index));
})
const setFaq =(index)=>{
    currentFaq = index
    if (faqItems[currentFaq].classList.contains('opened')){
        faqItems[currentFaq].classList.remove('opened')
        return
    }
    for(let item of faqItems){
        item.classList.remove('opened')
    }
    faqItems[currentFaq].classList.add('opened')
}