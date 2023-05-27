const navBar = document.querySelector("nav") ;
const menu = document.getElementById("menu") ;
const action = document.getElementById("action") ;
const btn = document.getElementById("myscroll") ;
window.addEventListener("scroll" , () =>{
   if(window.scrollY > 100){
      navBar.style.top = "0" ;
   }
} )
menu.addEventListener("click" , ()=>{
   addmenu() ;
})
function addmenu(){
   menu.classList.toggle("is-active") ;
   action.classList.toggle("is-active");
}

window.addEventListener("scroll" , ()=>{
   if(window.scrollY >= 600){
      btn.style.display = "block" ;
   }else{
      btn.style.display = "none" ;
   }
});
btn.addEventListener("click" ,()=>{
   window.scrollTo({
      left : 0 ,
      top : 0 ,
      behavior : "smooth" ,
   });
} );
const lis = document.querySelectorAll("ul li") ;
const menuColor = document.getElementById("menu-color") ;
const containerColor = document.querySelector(".container-color") ;
const footerColor = document.querySelector("footer") ;
const AllBtn = document.querySelector(".btn") ;
const colorAbout = document.querySelector(".about") ;
const colorbox = document.querySelector(".box");
// i use event click to hundl menu
menuColor.addEventListener("click" , ()=>{
   //add class hundlmenu to our container
   containerColor.classList.toggle("hundlmenu") ;
});

if(window.localStorage.getItem("color")){
   footerColor.style.backgroundColor = window.localStorage.getItem("color") ;
   colorbox.style.backgroundColor = window.localStorage.getItem("color") ;
   colorAbout.style.backgroundColor = window.localStorage.getItem("color") ;
   //remove class active for all lis
   lis.forEach((li)=>{
      li.classList.remove("active") ;
   });
   // document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active") ;

}

lis.forEach((li) =>{
   li.addEventListener("click" , (e)=>{
         // console.log(e.target.dataset.color) ;
         lis.forEach((li)=>{
            //remove class active to all lis
            li.classList.remove("active") ;
         });
         //add class active to current element
         e.target.classList.add("active") ;
         //add color clickable to localstorage
         window.localStorage.setItem("color" , e.target.dataset.color) ;
         //change color in our page
         footerColor.style.backgroundColor = e.target.dataset.color ;
         // AllBtn.style.backgroundColor = e.target.dataset.color ;
         colorAbout.style.backgroundColor = e.target.dataset.color ;
         colorbox.style.backgroundColor = e.target.dataset.color ;
   })
})













