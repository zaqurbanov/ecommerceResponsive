const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');

burgerMenu.addEventListener('click',()=>{
    navList.classList.toggle('active');

})

const slider = document.querySelector('.slider-wrap');
const slide = document.querySelectorAll('.slider-img');
const right = document.getElementById('right');
const left = document.getElementById('left');
const dots = document.querySelectorAll('.dot')
let currentIndex = 0;

const showSlide=(index)=>{

const totalSlide = slide.   length;
if(index>=totalSlide){
    currentIndex = 0;
    
}else if(index<0){
    currentIndex = totalSlide-1;
}
else{
    currentIndex=index
}


slider.style.transform = `translateX(-${currentIndex*100}%)`;
dotUpdate();

}

const dotUpdate = ()=>{
    dots.forEach((dot,index)=>{
        
        
        if(index == currentIndex){
            dot.classList.add('active');
        }else{
            dot.classList.remove('active');
        }
    })
}
const dotClick = ()=>{
    dots.forEach((dot,index)=>{
        dot.addEventListener('click',() =>{
            showSlide(index)
        })
    })
}

document.addEventListener('DOMContentLoaded',()=>{
    right.addEventListener('click',()=>{
        showSlide(currentIndex+1)
    })
    left.addEventListener('click',()=>{
        showSlide(currentIndex-1)
    })
     dotUpdate();
     dotClick()


})