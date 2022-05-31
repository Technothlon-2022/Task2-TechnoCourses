burger=document.querySelector('.burger');
respList=document.querySelector('.resp-list');
burger.addEventListener('click',()=>{
    respList.classList.toggle('v-resp');

})
function hideContent() {
    var x = document.getElementById("content");
    var c = document.getElementById("cards");
   var y = document.querySelector(".container");
   var s = document.querySelector(".side-bar");
    x.style.display="none";
    c.style.visibility="visible" ;
    s.style.height="360vh" ;
}
