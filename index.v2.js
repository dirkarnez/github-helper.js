
var editor = document.querySelector('.CodeMirror').CodeMirror;
editor.on("paste", (i, e) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    if (paste is url) {
      i.getDoc().replaceSelection("dsfds");
      e.preventDefault();
    }


  
    
})
