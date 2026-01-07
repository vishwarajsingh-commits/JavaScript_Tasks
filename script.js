let h1 = document.querySelector('h1');
let b1 = document.querySelector('#btn1');
let b2 = document.querySelector('#btn2');
let b3 = document.querySelector('#btn3');
let a=0;
b1.addEventListener('click',function (){
    a++;
    h1.textContent=a;
});
b2.addEventListener('click',function (){
    a--;
    h1.textContent=a;
});
b3.addEventListener('click',function (){
    a=0;
    h1.textContent=a;
});

