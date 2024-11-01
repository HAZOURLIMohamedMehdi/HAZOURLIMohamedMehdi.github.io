const menuBar=document.querySelector(".menu-bar");
const navLinks=document.querySelector(".nav-links");

function toggleMenu(){

     navLinks.classList.toggle("mobile-menu");
    if(document.getElementsByTagName("body")[0].style.overflow=="hidden"){
document.getElementsByTagName("body")[0].style.height="unset";
    document.getElementsByTagName("body")[0].style.overflow="unset";
    }else{
        document.getElementsByTagName("body")[0].style.height="100vh";
    document.getElementsByTagName("body")[0].style.overflow="hidden";
    }
}



function initialiseEvents(){

menuBar.addEventListener("click",toggleMenu);
document.querySelector(".nav-links .active a").addEventListener("click",()=>{

if(navLinks.classList.contains("mobile-menu")){
    toggleMenu();
}


});

document.querySelector(".nav-links .desactive a").addEventListener("click",()=>{

    if(navLinks.classList.contains("mobile-menu")){
    toggleMenu();
}
});


document.querySelector(".input-parent .fa-copy").addEventListener("click",()=>{

navigator.clipboard.writeText(document.querySelector(".input-parent input").value).then(()=>{
    var copie= document.querySelector(".input-parent input").value;
     document.querySelector(".input-parent input").value="Copied";
setTimeout(()=>{
document.querySelector(".input-parent input").value=copie;
},400);
});

});
 
 document.getElementById("range_bar").addEventListener("mousemove",()=>{

document.querySelector(".option-range-caracter-label span").textContent=document.getElementById("range_bar").value+' Caracters';
});   

 document.querySelector(".option-range-caracter-label span").textContent=document.getElementById("range_bar").value+' Caracters';
pass_gen();


document.getElementById("option1").querySelector("input").checked=true;
document.getElementById("option2").querySelector("input").checked=true;
document.getElementById("option3").querySelector("input").checked=true;
document.getElementById("option4").querySelector("input").checked=true;


}









function pass_gen() {

    // alphabetLower, alphabetUpper ,number,specialChars
var chars=[[document.getElementById("option2").querySelector("input").checked,'a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
                'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 
                'w', 'x', 'c', 'v', 'b', 'n'],
[document.getElementById("option1").querySelector("input").checked,'A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
                'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 
                'W', 'X', 'C', 'V', 'B', 'N'],
                [document.getElementById("option3").querySelector("input").checked,'1','2','3','4','5','6','7','8','9'],
                [document.getElementById("option4").querySelector("input").checked,'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', 
                    '[', ']', '{', '}', '\\', '|', ';', ':', '"', '\'', ',', '<', '>', '.', 
                    '/', '?', '~', '`']];
var charChosen=new Uint32Array(1);
var array_char=new Uint32Array(1);

var pass_text="Choose at least one Option";
var checkTest=false;

for(var i=0;i<4;i++){
    if(chars[i][0]){
        checkTest=true;
        pass_text="";
    }
}
  for(var i=0;i<document.getElementById("range_bar").value && checkTest;i++){
    console.log("test   !!!");
    crypto.getRandomValues(charChosen);
       crypto.getRandomValues(array_char);
       if(chars[(charChosen[0]%4)][0]){
               pass_text+=chars[(charChosen[0]%4)][(array_char[0]%(chars[(charChosen[0]%4)].length-1))+1];
       }else{
        i--;
      }
      
  }
  document.querySelector(".input-parent input").value=pass_text;

}

initialiseEvents();