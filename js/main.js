//BURGER MUNU 
document.querySelector('.top-header__burger').addEventListener('click',()=> {
   document.querySelector('.top-header__burger').classList.toggle('active');
   document.querySelector('.top-menu').classList.toggle('open');
});




//GRID AND LIST MODE

//GRID VIEW ON PRODUCTS PAGE
document.querySelector('.gird').addEventListener('click',()=> {
   document.querySelector('.gird').classList.add('active');
   document.querySelector('.list').classList.remove('active');
   document.querySelector('.card__list').classList.remove('column');
});

//LIST VIEW ON PRODUCTS PAGE
document.querySelector('.list').addEventListener('click',()=> {
   document.querySelector('.gird').classList.remove('active');
   document.querySelector('.list').classList.add('active');
   document.querySelector('.card__list').classList.add('column');
});