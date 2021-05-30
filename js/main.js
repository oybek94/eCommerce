document.querySelector('.top-header__burger').addEventListener('click',()=> {
   document.querySelector('.top-header__burger').classList.toggle('active');
   document.querySelector('.top-header').classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
});

