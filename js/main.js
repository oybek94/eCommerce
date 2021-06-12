document.querySelector('.top-header__burger').addEventListener('click',()=> {
   document.querySelector('.top-header__burger').classList.toggle('active');
   document.querySelector('.top-menu').classList.toggle('open');
});

document.querySelector('.gird').addEventListener('click',()=> {
   document.querySelector('.card__list').classList.remove('column');
});

document.querySelector('.list').addEventListener('click',()=> {
   document.querySelector('.card__list').classList.add('column');
});