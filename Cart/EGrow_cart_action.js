let cartdiv = document.getElementById("cartdiv");
let carttable = document.getElementById("carttable");
let showcart = document.getElementById("showcart");
//getting Local Storage.
let wdesc = JSON.parse(localStorage.getItem("witems"));
let wact = localStorage.getItem("wactions");
let tamt = localStorage.getItem("totalamount");

document.body.style.backgroundColor = 'darkseagreen';

showcart.addEventListener("click", () => {

    if (wact) {
        carttable.classList.remove("disp");
        let len = wdesc.length;
        let cnt = 0;
        for (let l = 0; l < (len / 3); l++) {
            let tr = document.createElement("tr");
            for (let i = 0; i < 3; i++) {
                let td = document.createElement("td");
                let tnode = null;
                let pos = i + l + cnt;
                if (i == 2) {
                    tnode = document.createTextNode('$ ' + wdesc[pos] + '.00');
                }
                else if (i != 2) {
                    tnode = document.createTextNode(wdesc[pos]);
                }
                td.appendChild(tnode);
                tr.appendChild(td);

            };
            cnt += 2;
            carttable.append(tr);
        }

        carttable.style.height = '300px';
        cartdiv.style.height = '430px';
        showcart.setAttribute("disabled", "true");
        for (let l = 0; l < 1; l++) {
            let tr = document.createElement("tr");
            for (let i = 0; i < 2; i++) {
                let td = document.createElement("td");
                if (i == 0) {
                    let tnode = document.createTextNode("Total Amount :");
                    td.appendChild(tnode);
                    td.setAttribute("colspan", 2);
                }
                else {
                    let tnode = document.createTextNode('$ ' + tamt + '.00');
                    td.appendChild(tnode);
                }

                tr.appendChild(td);
            }
            carttable.append(tr);
        }
    }

    else if (!wact) {
        let p = document.createElement("p");
        let ptext = document.createTextNode("No Items Added To Cart!!");
        p.appendChild(ptext);
        p.style.color = "white";
        p.style.marginTop = '30px';
        cartdiv.append(p);
        cartdiv.style.height = '200px';
        showcart.setAttribute("disabled", "true");
    }
});