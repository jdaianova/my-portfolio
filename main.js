const aboutMe = document.querySelector('.section-about-me');
const aboutMeContent = document.querySelector('.section-about-me-content');
aboutMe.addEventListener('click', () => {
    aboutMe.classList.toggle('green');
    aboutMeContent.classList.toggle('invisible');
    gsap.from(".text-frontend", { x: -100 });
});

const mySkills = document.querySelector('.section-my-skills');
const mySkillsContent = document.querySelector('.section-my-skills-content');
mySkills.addEventListener('click', () => {
    mySkills.classList.toggle('light-gray');
    mySkillsContent.classList.toggle('invisible');
    gsap.from(".skill-logo", { x: -100 });
});

const myPortfolio = document.querySelector('.section-portfolio');
const myPortfolioContent = document.querySelector('.section-portfolio-content');
myPortfolio.addEventListener('click', () => {
    myPortfolio.classList.toggle('orange');
    myPortfolioContent.classList.toggle('invisible');
});

const myContacts = document.querySelector('.section-contacts');
const myContactsContent = document.querySelector('.section-contacts-content');
myContacts.addEventListener('click', () => {
    myContacts.classList.toggle('yellow');
    myContactsContent.classList.toggle('invisible');
});

const smile = document.querySelector('.logo');
smile.addEventListener('click', () => {
    gsap.from(".logo", { y: 100, ease: 'bounce', duration:1 });
});

const home = document.querySelector('.home');
home.addEventListener('click', () => {
    document.querySelectorAll('.section-content').forEach((section) => {
        section.classList.add('invisible');
        myContacts.classList.remove('yellow');
        myPortfolio.classList.remove('orange');
        aboutMe.classList.remove('green');
        mySkills.classList.remove('light-gray');

    });
});