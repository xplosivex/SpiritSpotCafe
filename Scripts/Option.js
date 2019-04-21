function change(){
var here = document.getElementById("Type").value 
 if ( here == "Hot Caramel"  || here == "Hot Vanilla" || here == "Iced Caramel" || here  == "Iced Vanilla"  ) {
    hiddenDiv.style.display='block';
    
    Form.fileURL.focus();
    } 
    else{
    hiddenDiv.style.display='none';
document.getElementById("Type1").value = "None";
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
        document.getElementById("Extra3").value = "None";

}
}
