const menuBar=document.querySelector(".menu-bar");
const navLinks=document.querySelector(".nav-links");


menuBar.addEventListener("click",()=>{
    navLinks.classList.toggle("mobile-menu");
    if(document.getElementsByTagName("body")[0].style.overflow=="hidden"){
document.getElementsByTagName("body")[0].style.height="unset";
    document.getElementsByTagName("body")[0].style.overflow="unset";
    }else{
        document.getElementsByTagName("body")[0].style.height="100vh";
    document.getElementsByTagName("body")[0].style.overflow="hidden";
    }
    

});

document.getElementById("range_bar").addEventListener("change",()=>{

document.querySelector(".option-range-caracter-label span").textContent=document.getElementById("range_bar").value+' Caracters';
});





function pass_gen() {

    // alphabetLower, alphabetUpper ,number,specialChars
var chars=[['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
                'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 
                'w', 'x', 'c', 'v', 'b', 'n'],
['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
                'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 
                'W', 'X', 'C', 'V', 'B', 'N'],
                ['1','2','3','4','5','6','7','8','9'],
                ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', 
                    '[', ']', '{', '}', '\\', '|', ';', ':', '"', '\'', ',', '<', '>', '.', 
                    '/', '?', '~', '`']];
var charChosen=new Uint32Array(document.getElementById("range_bar").value);
var array_char=new Uint32Array(1);
crypto.getRandomValues(charChosen);
var pass_text="";
  for(var i=0;i<document.getElementById("range_bar").value;i++){
       crypto.getRandomValues(array_char);
       pass_text+=chars[(charChosen[i]%4)][(array_char[0]%(chars[(charChosen[i]%4)].length))];
  }
  document.querySelector(".input-parent input").value=pass_text;

}

document.querySelector(".option-range-caracter-label span").textContent=document.getElementById("range_bar").value+' Caracters';
pass_gen();