let cartdiv = document.getElementById("cartdiv");
let carttable = document.getElementById("carttable");
let showcart = document.getElementById("showcart");
let cart_p = document.getElementsByClassName('cart_p')[0];

//getting Local Storage.
let wdesc = JSON.parse(localStorage.getItem("witems"));
let wact = localStorage.getItem("wactions");
let tamt = localStorage.getItem("totalamount");
let shrink = false;
document.body.style.cssText = 'background-color:darkseagreen;height:100vh';

showcart.addEventListener("click", () => {
    shrink = !shrink;
    if(!shrink){
        carttable.innerHTML = '';
        cartdiv.style.height = '75vh';
    if (wact) {
        carttable.classList.remove("disp");
        let th = document.createElement('tr');
        for(let i=0;i<3;i++){
            let ld = document.createElement('th');
            if(i==0)
            ld.innerHTML = 'Flower Name';
        else if(i==1)
ld.innerHTML = 'Quantity';
        else if(i==2)
            ld.innerHTML = 'Rate';
        th.appendChild(ld)
        }
carttable.append(th);
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
        p.style.marginTop = '20px';
        cart_p.append(p);
            cartdiv.style.height = '8vh';
    }
}
else{
    carttable.className = 'disp';
    cartdiv.style.height = '8vh';
            cart_p.innerHTML = '';
}
});