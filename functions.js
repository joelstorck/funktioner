var header = document.createElement("div");
var h1 = document.createElement("h1");
    h1.innerText = "Hej, vad heter du?";
        header.appendChild(h1);
            document.body.appendChild(header);
            
            var list = document.getElementById("firstDiv");
            list.insertBefore(header, list.childNodes[0])
        

var button = document.getElementById("tUc"); 

button.addEventListener("click", function() {
    console.log("click");
    
var name = document.getElementById("textInsert").value;
    var convertReturnToString = String(name);
    var returnName = convertReturnToString.toUpperCase();
        document.getElementById("textInsert").value=returnName;


    

    console.log(name);
    console.log(returnName);
    

});
