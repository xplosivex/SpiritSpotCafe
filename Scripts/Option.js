function show(aval) {
    if ( aval == "Hot Caramel"  || aval == "Hot Vanilla" || aval == "Iced Caramel" || aval == "Iced Vanilla"  ) {
    hiddenDiv.style.display='block';
    
    Form.fileURL.focus();
    } 
    else{
    hiddenDiv.style.display='none';
    }
  }
