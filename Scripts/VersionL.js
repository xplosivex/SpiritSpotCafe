setTimeout(loadStyle, 150)
function loadStyle(href, callback){
    // avoid duplicates
    for(var i = 0; i < document.styleSheets.length; i++){
        if(document.styleSheets[i].href == href){
            return;
        }
    }
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://www.spiritspotcafe.com/CSS/Table.css';
    if (callback) { link.onload = function() { callback() } }
    head.appendChild(link);
}


