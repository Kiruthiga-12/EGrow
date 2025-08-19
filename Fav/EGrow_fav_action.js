let favdiv = document.getElementById("favdiv");
let ftext = document.getElementById("ftext");
let showfav = document.getElementById("showfav");
//getting Local Storage.
let fdesc = JSON.parse(localStorage.getItem("fitems"));
let fact = localStorage.getItem("factions");

document.body.style.backgroundColor = 'azure';

showfav.addEventListener("click", () => {
    if (fact) {
        for (let i = 0; i < fdesc.length; i++) {
            let a = document.createElement("a");
            let li = document.createElement("li");
            let ltext = document.createTextNode(fdesc[i]);
            let br = document.createElement("br");
            li.appendChild(ltext);
            li.style.marginLeft = '-200px';
            a.appendChild(li);
            a.href = "EGrow.html#" + fdesc[i];
            ftext.append(a);
            ftext.append(br);
        };
        ftext.style.height = '300px';
        favdiv.style.height = '400px';
        showfav.setAttribute("disabled", "true");
    }

    else if (!fact) {
        let li = document.createElement("li");
        let ltext = document.createTextNode("No fav items selected!!!");
        li.appendChild(ltext);
        ftext.append(li);
        favdiv.style.height = '200px';
        ftext.style.height = '100px';
        li.style.marginLeft = '-200px';
        showfav.setAttribute("disabled", "true");
    }
});



