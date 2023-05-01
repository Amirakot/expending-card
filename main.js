const card=document.querySelectorAll(".content");
card.forEach(e=>{
   
    e.addEventListener('click',function(){
         removeclasslist();
        e.classList.add('active');
    })
})
function removeclasslist(){
    card.forEach(e=>{
        e.classList.remove('active');
    })
}