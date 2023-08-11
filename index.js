


const a=document.querySelector('#increment-btn');
const b=document.getElementById('getcount');

let cnt=0;
a.addEventListener('click',()=>{
    console.log("button clicked");
    b.textContent=++cnt;
})


let c=document.querySelector('save-btn');
const savedata=()=>{
    let all=cnt+"  -  ";
    let c=document.querySelector('#save-el');
    c.textContent+=all;
    //Reinitialized from 0 (start)
    cnt=0;
    b.textContent=cnt;
    //use textContent instead of innerText
}

let d=document.getElementById('main');
d.addEventListener('mouseenter',()=>{
    alert("Welcome to Passenger count By SARTHIK !")
})