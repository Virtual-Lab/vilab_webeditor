var editor, code, canvasEl, runButton, jsEl, delEl;
    
    // trigger extension
    ace.require("ace/ext/language_tools");
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/javascript");
    
    // enable autocompletion and snippets
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
    });

    show = document.getElementById('show');
    runButton = document.getElementById('runbutton');

    jsEl = document.getElementById('editor_code');
    
    function runProgram(event) {
    
   	 	event.preventDefault();

 	   	var code = editor.getValue();
    	var script = document.createElement('script');
        var oldscript = document.getElementById("myScript");
    
    	// canvasEl.innerHTML = code; 	
    	script.innerHTML = code;
        script.id = "myScript"
        
        for (i=0; i < show.childNodes.length; i++) {
            show.removeChild(show.childNodes[i]);
        };

        jsEl.removeChild(oldscript);
    	jsEl.appendChild(script); 
    	
    	}
    	
    runButton.addEventListener('click', runProgram, false);