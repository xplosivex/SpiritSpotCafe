function change(){
var here = document.getElementById("Type").value 
 if ( here == "Hot Caramel"  || here == "Hot Vanilla" || here == "Iced Caramel" || here  == "Iced Vanilla"  ) {
    hiddenDiv.style.display='block';
   
    Form.fileURL.focus();
  hiddenDiv3.style.display='none';
    } 
    else if ( here == "Hot Chocolate" || here == "None"  ){
   hiddenDiv.style.display='none';
     hiddenDiv3.style.display='none';
     document.getElementById("ToppingsA").checked = false; 
     document.getElementById("ToppingsB").checked = false;
      document.getElementById("ToppingsC").checked = false; 
     document.getElementById("ToppingsD").checked = false;
      
    }  else if ( here == "Smoothie" ) {
     hiddenDiv3.style.display='block';
    Form.fileURL.focus();
     hiddenDiv.style.display='none';
     document.getElementById("ToppingsA").checked = false; 
     document.getElementById("ToppingsB").checked = false;
      document.getElementById("ToppingsC").checked = false; 
     document.getElementById("ToppingsD").checked = false;
    }

 
}

function change2(){
    var here2 = document.getElementById("Extra2").value 
 if ( here2 == "Yes") {
    hiddenDiv2.style.display='block';
    
    Form.fileURL.focus();
    } 
    else {
    hiddenDiv2.style.display='none';
    }if ( here2 == "No") {
  document.getElementById("ExtraA").checked = false; 
document.getElementById("ExtraB").checked = false;
 document.getElementById("ExtraC").checked = false;
document.getElementById("ExtraC").checked = false;
document.getElementById("ExtraD").checked = false;
document.getElementById("ExtraF").checked = false;
document.getElementById("ExtraG").checked = false;
document.getElementById("ExtraH").checked = false;
document.getElementById("ExtraI").checked = false;
document.getElementById("ExtraJ").checked = false;
document.getElementById("ExtraK").checked = false;
document.getElementById("ExtraL").checked  = false;
document.getElementById("ExtraM").checked = false;
document.getElementById("ExtraN").checked = false;
document.getElementById("ExtraO").checked = false;
document.getElementById("ExtraP").checked = false;
document.getElementById("ExtraQ").checked = false;
document.getElementById("ExtraR").checked = false;
document.getElementById("ExtraS").checked = false;
document.getElementById("ExtraT").checked = false;  

}
}
