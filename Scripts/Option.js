function change(){
var here = document.getElementById("Type").value 
 if ( here == "Hot Caramel"  || here == "Hot Vanilla" || here == "Iced Caramel" || here  == "Iced Vanilla"  ) {
    hiddenDiv.style.display='block';
    
    Form.fileURL.focus();
    } 
    else{
    hiddenDiv.style.display='none';
document.getElementById("Toppings").value = "None";
}
    var here2 = document.getElementById("Extra").value 
 if ( here2 == "Yes") {
    hiddenDiv2.style.display='block';
    
    Form.fileURL.focus();
    } 
    else{
    hiddenDiv2.style.display='none';

}
}

