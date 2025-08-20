let favdiv = document.getElementById("favdiv");
let ftext = document.getElementById("ftext");
let showfav = document.getElementById("showfav");
//getting Local Storage.
let fdesc = JSON.parse(localStorage.getItem("fitems"));
let fact = localStorage.getItem("factions");
let shrink = false;
document.body.style.cssText = 'background-color:azure;height:100vh';
showfav.addEventListener("click", () => {
    shrink = !shrink;
    if(!shrink){
             ftext.className = '';
             favdiv.style.height = '100vh';
             ftext.innerHTML = '';
    if (fact) {
        for (let i = 0; i < fdesc.length; i++) {
            let a = document.createElement("a");
            let li = document.createElement("span");
            let ltext = document.createTextNode(fdesc[i]);
            let br = document.createElement("br");
            li.style.display ='block'
            li.appendChild(ltext);
            a.appendChild(li);
            a.href = "../index.html#" + fdesc[i];
            ftext.append(a);
            ftext.append(br);
            favdiv.style.height = '50vh';
            ftext.style.height = '90%';
        };
    }

    else if (!fact) {
        let li = document.createElement("span");
        let ltext = document.createTextNode("No fav items selected!!!");
        li.appendChild(ltext);
        ftext.append(li);
        favdiv.style.height = '200px';
        ftext.style.height = '100px';
        li.style.margin = 'auto';
    }
    }
else{
           ftext.className ='disp';
            favdiv.style.height = '2vh';
}
});



