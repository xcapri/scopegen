function _hideLoading(){
    const div=document.querySelectorAll("#hideme");
    for(let i=0;i<div.length;i++){
        div[i].style.visibility='hidden';
    }
}

function sendToScope(value) {
    _hideLoading()
    
    var lines                       = value.split('\n');
    var _topdomain                  = ""
    if(lines.length !== 1){
        for(var i = 0; i < lines.length; i++){

            _getDomainWithoutSuffix = lines[i]
                                            .replace("www.", "")
                                            .replace("*.","")
                                            .replace("http://","")
                                            .replace("https://","")
                                            .replace("/","")
                                            .replace("*.","")
                                            .split(".")
            _lengths = _getDomainWithoutSuffix.length

            if (_lengths > 2){
                _topdomain = _getDomainWithoutSuffix.slice(1,_getDomainWithoutSuffix.length).join(".")
            }else {
                _topdomain = _getDomainWithoutSuffix[1]
            }


            const _for_matchallsubdo_hmtl = document.querySelector('#_show_matchallsubdo')
            const _for_matchalldomainname_hmtl = document.querySelector('#_show_matchalldomainname')
            const _for_matchallcontaintarget_hmtl = document.querySelector('#_show_matchallcontaintarget')
            
            _for_matchallsubdo          = ".*\\."+_getDomainWithoutSuffix[0]+"\\."+_topdomain+"$"
            _for_matchalldomainname     = ".*\\."+_getDomainWithoutSuffix[0]+"\\..*$"
            _for_matchallcontaintarget  = "(^|^[^:]+:\\/\\/|[^\\.]+\\.)"+_getDomainWithoutSuffix[0]+".*"
            
            _for_matchallsubdo_hmtl.innerHTML += _for_matchallsubdo+"<br>"
            _for_matchalldomainname_hmtl.innerHTML += _for_matchalldomainname+"<br>"
            _for_matchallcontaintarget_hmtl.innerHTML += _for_matchallcontaintarget+"<br>"
            
        }
    }

}

function copyToclip(id) {

    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

}