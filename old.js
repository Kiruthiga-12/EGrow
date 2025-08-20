// /search icon event listener
navi.addEventListener("click",()=>{
    if(search.value.length>0){
        Array.from(desc).findIndex((li)=>{
        if(li.innerHTML.includes(search.value)){
            search.style.color = 'limegreen';
            let href = "#" + search.value;
            isearch.setAttribute("href", href);
        }
        else{
            alert("No matching values found!");
             isearch.removeAttribute("href");
        }
    })
    }
    else if (search.value.length==0){
        alert("Please Enter value to search!!")
    //     isearch.removeAttribute("href");
    //     search.value = "no values found!";
    //     search.style.color = 'red';
    }
})




//Rate Calculation based on Quantity.
for (let i = 0; i < rate.length; i++) {
    Qty[i].addEventListener("input", () => {
        switch (i) {
            case 0: {
                let quantity = 0;
                if (Qty[i].value > 0 && Qty[i].value <= 50) {
                    quantity = Qty[i].value * 10.00;
                    rate[i].innerText = "$" + quantity + ".00";
                }
                else {
                    rate[i].innerText = "$" + quantity + ".00";
                }

                break;
            }
            case 1: {
                let quantity = 0;
                if (Qty[i].value > 0 && Qty[i].value <= 50) {
                    quantity = Qty[i].value * 20.00;
                    rate[i].innerText = "$" + quantity + ".00";
                }
                else {
                    rate[i].innerText = "$" + quantity + ".00";
                }
                break;
            }
            case 2: {
                let quantity = 0;
                if (Qty[i].value > 0 && Qty[i].value <= 50) {
                    quantity = Qty[i].value * 30.00;
                    rate[i].innerText = "$" + quantity + ".00";
                }
                else {
                    rate[i].innerText = "$" + quantity + ".00";
                }
                break;
            }
            case 3: {
                let quantity = 0;
                if (Qty[i].value > 0 && Qty[i].value <= 50) {
                    quantity = Qty[i].value * 40.00;
                    rate[i].innerText = "$" + quantity + ".00";
                }
                else {
                    rate[i].innerText = "$" + quantity + ".00";
                }
                break;
            }
            case 4: {
                let quantity = 0;
                if (Qty[i].value > 0 && Qty[i].value <= 50) {
                    quantity = Qty[i].value * 50.00;
                    rate[i].innerText = "$" + quantity + ".00";
                }
                else {
                    rate[i].innerText = "$" + quantity + ".00";
                }
                break;
            }
            case 5: {
                let quantity = 0;
                if (Qty[i].value > 0 && Qty[i].value <= 50) {
                    quantity = Qty[i].value * 60.00;
                    rate[i].innerText = "$" + quantity + ".00";
                }
                else {
                    rate[i].innerText = "$" + quantity + ".00";
                }
                break;
            }
            case 6: {
                let quantity = 0;
                if (Qty[i].value > 0 && Qty[i].value <= 50) {
                    quantity = Qty[i].value * 70.00;
                    rate[i].innerText = "$" + quantity + ".00";
                }
                else {
                    rate[i].innerText = "$" + quantity + ".00";
                }
                break;
            }
            case 7: {
                let quantity = 0;
                if (Qty[i].value > 0 && Qty[i].value <= 50) {
                    quantity = Qty[i].value * 80.00;
                    rate[i].innerText = "$" + quantity + ".00";
                }
                else {
                    rate[i].innerText = "$" + quantity + ".00";
                }
                break;
            }
            case 8: {
                let quantity = 0;
                if (Qty[i].value > 0 && Qty[i].value <= 50) {
                    quantity = Qty[i].value * 90.00;
                    rate[i].innerText = "$" + quantity + ".00";
                }
                else {
                    rate[i].innerText = "$" + quantity + ".00";
                }
                break;
            }
            case 9: {
                let quantity = 0;
                if (Qty[i].value > 0 && Qty[i].value <= 50) {
                    quantity = Qty[i].value * 100.00;
                    rate[i].innerText = "$" + quantity + ".00";
                }
                else {
                    rate[i].innerText = "$" + quantity + ".00";
                }
                break;
            }
        }
    });

}

//Add to Cart Logic.
let wishitems = [];
let total_amt = 0.00; let descrip = [], cnt = [], rt = [];
for (let i = 0; i < add.length; i++) {
    add[i].addEventListener("click", () => {
        if (add[i].value == "Add To Cart") {
            descrip[i] = desc[i].innerText; /*to get description*/
            cnt[i] = Qty[i].value;                 /*to get quantity*/
            rt[i] = +(rate[i].innerHTML.slice(1,));   /*to get rate*/
            total_amt += rt[i];                 /*to get total amount*/
            wishitems.push([usrname, descrip[i], cnt[i], rt[i]]);
            add[i].value = 'Remove from cart';
            add[i].classList.add("RemoveFrom");
            add[i].classList.remove("AddTo");
        }
        else if (add[i].value == "Remove from cart") {
            add[i].value = 'Add To Cart';
            add[i].classList.remove("RemoveFrom");
            add[i].classList.add("AddTo");
            descrip.splice(i, 1);
            cnt.splice(i, 1);
            rt[i] = +(rate[i].innerHTML.slice(1,));
            total_amt -= rt[i];
            rt.splice(i, 1);
            let favdesc = desc[i].innerText;
            for (let k = 0; k < wishitems.length; k++) {
                for (let j = 0; j < 2; j++) {
                    if (wishitems[k][j] == favdesc) {
                        wishitems.splice(k, 1);
                    }
                }
            }
        }
    });
}

//wishlist and display
wishlist.addEventListener("click", () => {
    if (usrname != '') {
        //removing session variables.
        localStorage.removeItem("wactions");
        localStorage.removeItem("witems");
        localStorage.removeItem("totalamount");
        let finalwishlist = [];
        window.open("index.html", "_blank", 'resizable=0,height=450,width=400');
        for (let k = 0; k < wishitems.length; k++) {
            for (let j = 0; j < 4; j++) {
                if (usrname != wishitems[k][j]) {
                    finalwishlist.push(wishitems[k][j]);
                }
            }
        }
        if (wishitems.length > 0)
            if (usrname == wishitems[0][0]) {
                window.localStorage.setItem("witems", JSON.stringify(finalwishlist));
                window.localStorage.setItem("wactions", true);
                window.localStorage.setItem("totalamount", total_amt);
            }
    }
});









