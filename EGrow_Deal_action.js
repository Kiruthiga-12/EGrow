let totalamt = document.getElementById("totalamt");
let discountamt = document.getElementById("discountamt");
let sp1 = document.getElementById("sp1");
let sp2 = document.getElementById("sp2");
let amt = localStorage.getItem("amount");
setTimeout(() => {
    sp1.innerText = '$' + amt + '.00';
    sp1.classList.remove("disp");
    sp2.classList.remove("disp");
    let dis = (50 * amt) / 100;
    sp2.innerText = '$' + dis + '.00';
}, 1000);