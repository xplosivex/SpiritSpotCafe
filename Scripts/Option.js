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
   
      
    }  else if ( here == "Smoothie" ) {
     hiddenDiv3.style.display='block';
    Form.fileURL.focus();
     hiddenDiv.style.display='none';
    
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
 

}
}
