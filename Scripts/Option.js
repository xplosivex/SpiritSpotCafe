function show(aval) {
    if ( aval == "Hot Caramel"  || aval == "Hot Vanilla" || aval == "Iced Caramel" || aval == "Iced Vanilla"  ) {
    hiddenDiv.style.display='block';
    
    Form.fileURL.focus();
    } 
    else{
    hiddenDiv.style.display='none';
        document.getElementById("Toppings").value = "None";
        
    }
  }

function show(aval) {
    if ( aval == "Yes" ) {
    hiddenDiv2.style.display='block';
    
    Form.fileURL.focus();
    } 
    else{
    hiddenDiv2.style.display='none';
     
        
    }
  }
