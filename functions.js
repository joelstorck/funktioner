var header = document.createElement("div");
var h1 = document.createElement("h1");
    h1.innerText = "Hej, vad heter du?";
        header.appendChild(h1);
            document.body.appendChild(header);
            
            var list = document.getElementById("firstDiv");
            list.insertBefore(header, list.childNodes[0])
        

