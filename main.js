let l0 = document.getElementById('l7');
let l1 = document.getElementById('l1');
let l2 = document.getElementById('l2');
let l3 = document.getElementById('l3');
let l4 = document.getElementById('l4');
let l5 = document.getElementById('l5');
let l6 = document.getElementById('l6');
let l7 = document.getElementById('l7');
let l8 = document.getElementById('l8');
let l9 = document.getElementById('l9');
let l10 = document.getElementById('l10');
let l11 = document.getElementById('l11');
let l12 = document.getElementById('l12');
//---------------------------------------
window.onscroll = function(){
    let value = scrollY;
    l0.style.right = value + 'px';
    l6.style.left = value * 4 + 'px';
    l5.style.transform = `rotate(${-value * 0.1 }deg)`;
    l5.style.right = value * 2 + 'px';
    l5.style.top = value * 2 + 'px';
    l3.style.transform = `rotate(${value * 0.1 }deg)`;
    l3.style.left = value *2 + 'px';
    l3.style.top = value * 3 + 'px';
    l4.style.top = value * 5 + 'px';
    l1.style.transform = `translatex(${value * 0.15}px) translatey(${value}px) rotate(${value * 0.15 }deg)`;
    l2.style.transform = `translatex(${value * 0.1}px) translatey(${value}px) rotate(${value * 0.1 }deg)`;
    l8.style.transform = `translatex(${value * 0.1}px) translatey(${value}px) rotate(${value * 0.1 }deg)`;
    l1.style.left = value * 2 + 'px'; 
    l2.style.left = value * 3 + 'px';
    l8.style.left = value * 3 + 'px';
    l12.style.top = value  + 'px';
    l9.style.top = value *0.1  + 'px';

}