function _hideLoading(){
    const div=document.querySelectorAll("#hideme");
    for(let i=0;i<div.length;i++){
        div[i].style.visibility='hidden';
    }
}

function sendToScope(value) {
    _hideLoading();

    const lines = value.split('\n');
    let topdomain = "";
    const matchallsubdo_html = document.querySelector('#_show_matchallsubdo');
    const matchalldomainname_html = document.querySelector('#_show_matchalldomainname');
    const matchallcontaintarget_html = document.querySelector('#_show_matchallcontaintarget');

    matchallsubdo_html.innerHTML = "";
    matchalldomainname_html.innerHTML = "";
    matchallcontaintarget_html.innerHTML = "";

    lines.forEach(line => {
        const domainWithoutSuffix = line
            .replace("www.", "")
            .replace("*.", "")
            .replace("http://", "")
            .replace("https://", "")
            .replace("/", "")
            .replace("*.", "")
            .split(".");

        if (domainWithoutSuffix.length >= 2) {
            const lengths = domainWithoutSuffix.length;
            if (lengths > 2) {
                topdomain = domainWithoutSuffix.slice(1, domainWithoutSuffix.length).join(".");
            } else {
                topdomain = domainWithoutSuffix[1];
            }

            const for_matchallsubdo = `.*\\.${domainWithoutSuffix[0]}\\.${topdomain}$`;
            const for_matchalldomainname = `.*\\.${domainWithoutSuffix[0]}\\..*$`;
            const for_matchallcontaintarget = `(^|^[^:]+:\\/\\/|[^\\.]+\\.)${domainWithoutSuffix[0]}.*`;

            matchallsubdo_html.innerHTML += `${for_matchallsubdo}<br>`;
            matchalldomainname_html.innerHTML += `${for_matchalldomainname}<br>`;
            matchallcontaintarget_html.innerHTML += `${for_matchallcontaintarget}<br>`;
        }
    });
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