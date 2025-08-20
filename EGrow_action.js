import arr from "./arr.js";

let pitems = document.getElementsByClassName("Product_Items")[0];
let tdiv = document.getElementsByClassName("totaldiv");
let submit = document.getElementById("submit");
let err = document.getElementById("err");
let uname = document.getElementById("name");
let mail = document.getElementById("mail");
let cell = document.getElementById("cell");
let comments = document.getElementById("comments");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let deal = document.getElementById("deal");
let navi = document.getElementById("navi");
let i1 = document.getElementById("arr1");
let i2 = document.getElementById("arr2");
let homeimg = document.getElementById("homeimg");
let homep = document.getElementById("homep");
let lp = document.getElementById("lp");

let desc = document.getElementsByClassName("desc");
let hrt = document.getElementsByClassName("hrt");
let Qty = document.getElementsByClassName("Qty");
let rate = document.getElementsByClassName("rate");
let add = document.getElementsByClassName("Addto");


let search = document.getElementById("search");
let isearch = document.getElementById("isearch");
let fav = document.getElementById("fav");
let wishlist = document.getElementById("wishlist");
let usrname = '';



// dom loaded
document.addEventListener("DOMContentLoaded", () => {
    // localStorage.removeItem("username");
    // localStorage.removeItem("loggedin");
    localStorage.removeItem("fitems");
    localStorage.removeItem("factions");
    localStorage.removeItem("wactions");
    localStorage.removeItem("witems");
    localStorage.removeItem("totalamount");
    localStorage.removeItem("amount");
})

//search icon event listener
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





//if not Logged in , alert Message
// document.body.addEventListener("click", (e) => {
    // console.log(localStorage)
    if (localStorage.getItem("loggedin") == "true") {
        usrname = localStorage.getItem("username");
        lp.innerText = "Welcome " + localStorage.getItem('username');
    }
    // else if ((localStorage.getItem("loggedin") != true) && (e.target.innerText != "Login/Signup")) {
    //     // alert("Please Login !!!");
    // }
// })




//to add and removed the fav item.
let favitems = [];
for (let i = 0; i < hrt.length; i++) {
    hrt[i].addEventListener("click", () => {
        //Unfav
        if (hrt[i].className.includes("solid")) {
            hrt[i].classList.remove("fa-solid");
            hrt[i].classList.add("fa-regular");
            let favdesc = desc[i].innerText;
            for (let k = 0; k < favitems.length; k++) {
                for (let j = 0; j < 2; j++) {
                    if (favitems[k][j] == favdesc) {
                        favitems.splice(k, 1);
                    }
                }
            }
        }
        //fav
        else if (hrt[i].className.includes("regular")) {
            hrt[i].classList.add("fa-solid");
            hrt[i].classList.remove("fa-regular");
            let favdesc = desc[i].innerText;
            favitems.push([usrname, favdesc]);
        }

    })

}


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
        window.open("EGrow_Cart.html", "_blank", 'resizable=0,height=450,width=400');
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

//favlist and Display
fav.addEventListener("click", () => {
    if (usrname != '') {
        //removing session variables.
        localStorage.removeItem("factions");
        localStorage.removeItem("fitems");
        let finallist = [];
        window.open("EGrow_fav.html", "_blank", 'resizable=0,height=400,width=400');
        for (let k = 0; k < favitems.length; k++) {
            for (let j = 0; j < 2; j++) {
                if (usrname != favitems[k][j]) {
                    finallist.push(favitems[k][j]);
                }
            }
        }
        if (favitems.length > 0)
            if (usrname == favitems[0][0]) {
                window.localStorage.setItem("fitems", JSON.stringify(finallist));
                window.localStorage.setItem("factions", true);
            }
    }
});








//Renderinf Product items
if(arr.length>0){
    let div ;
    for(let i =0 ;i<arr.length;i++){
        div = document.createElement("div");
        div.id = 'div'+(i+1);
        div.className = 'totaldiv';

        let img = document.createElement("img");
        img.className ='productimg';
        img.src = arr[i].img;
        div.appendChild(img);

        let productdiv = document.createElement("div");
        productdiv.className ='productdiv';

        let desc = document.createElement("p");
        desc.className = 'desc';
        desc.id = arr[i].name;
        desc.innerHTML = arr[i].name;

        let fav = document.createElement("i");
        fav.classList.add('fa-regular','fa-heart','hrt');

        let br = document.createElement('br');

        let label = document.createElement("label");
        label.setAttribute('for','qty'+(i+1))
        label.innerHTML = `Quantity &nbsp;`;

        let inp = document.createElement("input");
        inp.type = "number";
        inp.id = 'qty'+(i+1);
        inp.min =1;
        inp.max= 50;
        inp.value = 1;
        inp.className = 'Qty';

        let price = document.createElement("p");
        price.className ='rate';
        price.id='rate'+(i+1);
        price.innerHTML = `$${arr[i].rate}`;

        let input = document.createElement("input");
        input.type = "Submit";
        input.className = "Addto";
        input.value = "Add To Cart"

        productdiv.appendChild(desc);
        productdiv.appendChild(fav);
        productdiv.appendChild(br)
        productdiv.appendChild(label);
        productdiv.appendChild(inp);
        productdiv.appendChild(price);
        productdiv.appendChild(input);

        div.appendChild(productdiv);
         pitems.append(div);
    }

}

//for hightlighting current box.
for (let i = 0; i < tdiv.length; i++) {
    tdiv[i].addEventListener("mouseover", () => {
        tdiv[i].style.boxShadow = "2px 2px 50px darkgreen";
    });
    tdiv[i].addEventListener("mouseleave", () => {
        tdiv[i].style.boxShadow = "";
    });
}

//Contact form validation
submit.addEventListener("click", () => {
    let flag = true;
    err.classList.remove("disp");
    if (!uname.value) {
        err.innerText = "Please Enter your Name!";
        flag = false;
    }
    else if (!mail.value) {
        err.innerText = "Please Enter your Mail ID!";
        flag = false;
    }

    else if (!cell.value) {
        err.innerText = "Please Enter your Mobile.No !";
        flag = false;
    }

    else if (!comments.value) {
        err.innerText = "Please Enter your Comments/Queries !";
        flag = false;
    }

    if (mail.value) {
        let pat = /[a-z][0-9]*[a-z]*@[a-z]{1,}.com|[a-z][0-9]*[a-z]*@[a-z]{1,}.in/gi;
        let val = mail.value;
        if (pat.test(val)) {

        }
        else {
            err.style.color = 'red';
            err.innerText = "Please Enter your Email ID in correct format !";
            flag = false;
        }
    }
    if (cell.value) {
        let pat1 = /[1-9]{1}[0-9]{9}/;
        let val1 = cell.value;
        if ((pat1.test(val1)) && (val1.length == 10)) {

        }
        else {
            err.style.color = 'red';
            err.innerText = "Please Enter your Mobile.No in correct format !";
            flag = false;
        }
    }
    if (flag) {
        err.style.color = "darkolivegreen";
        err.innerText = "Comments Submitted!";
    }

})


//Date display
function timedisp() {
    let nd = new Date();
    let hrs = nd.getHours();
    let mins = nd.getMinutes();
    let secs = nd.getSeconds();
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
}

var interval = setInterval(timedisp, 1000);


//Dispay the discount amoutn for Cart Items
deal.addEventListener("click", () => {
    let amt = total_amt;
    if ((wishitems.length > 0) && (usrname != ' ')) {
        window.open("Deal/EGrow_Deal.html", '_blank', 'resizable=0,width=400,height=200');
        window.localStorage.setItem("amount", amt);
    }
else{ 
    alert('Please add products to Cart to avail discount!!')
}
});

//searching the element
search.addEventListener("input", () => {
    search.style.color = 'indigo';
    search.style.fontWeight = 'bold';

})


//navigate to next and Previous Image.
let rmnd = 1;
i2.addEventListener("click", () => {
    ++rmnd;
    if (rmnd <= 3) {
        switch (rmnd) {
            case 2: {
                homeimg.style.backgroundImage = "url(Images/Img12.jpg)";
                homep.style.color = 'black';
                break;
            }
            case 3: {
                homeimg.style.backgroundImage= "url(Images/Img0.jpg)";
                homep.style.color = 'white';
                i2.style.display = 'none';
                i1.classList.remove("disp");
                i1.style.display = 'inline-block';
                rmnd1 = 3;
                break;
            }

        }
    }

});

let rmnd1 = 3;
i1.addEventListener("click", () => {
    rmnd1--;
    if (rmnd1 >= 1) {
        switch (rmnd1) {
            case 2: {
                homeimg.style.backgroundImage = "url(Images/Img12.jpg)";
                homep.style.color = 'black';
                break;
            }
            case 1: {
                homeimg.style.backgroundImage = "url(Images/Img3.jpg)";
                homep.style.color = 'limegreen';
                i1.style.display = 'none';
                i2.style.display = 'inline-block';
                rmnd = 1;
                break;
            }

        }
    }

});


//Login Form validation
lp.addEventListener("click", () => {
    if (lp.innerText == "Login/Signup") {
        window.open('Login/EGrow_Login.html', '_blank', 'resizable=0,height=500,width=600');
    }
});