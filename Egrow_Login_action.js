let loga1 = document.getElementById("loga1");
let loga2 = document.getElementById("loga2");
let loginp = document.getElementById("loginp");
let loginsubmit = document.getElementById("loginsubmit");
let lname = document.getElementById("lname");
let lpwd = document.getElementById("lpwd");
let loginmsg = document.getElementById("loginmsg");
let lp = document.getElementById("lp");
let namecheck = false;
let pwdcheck = false;
let signnamecheck = false;
let signpwdcheck = false;

loga1.addEventListener("click", () => {
    loginp.innerText = 'Login Page';
    loginsubmit.value = 'Login';
});
loga2.addEventListener("click", () => {
    loginp.innerText = 'Submit Page';
    loginsubmit.value = 'Submit';
});

let pat = /[a-z]{3,}[0-9]{1,}/gi;
let pwd = /[0-9]{4}/g;
let signpwd = /[0-9]{4}/g;

//getting Name value:
lname.addEventListener("input", () => {
    lname.setAttribute("value", lname.value);
    loginmsg.innerText = '';
})

//getting pwd:
lpwd.addEventListener("input", () => {
    lpwd.setAttribute("value", lpwd.value);
    loginmsg.innerText = '';
})

lpwd.addEventListener('blur', () => {
    if (loginp.innerText == 'Login Page') {
        namecheck = pat.test(lname.value);
        pwdcheck = pwd.test(lpwd.value);
    }
    else if (loginp.innerText == 'Submit Page') {
        signnamecheck = pat.test(lname.value);
        signpwdcheck = signpwd.test(lpwd.value);
    }
})
//within 2 seconds input not given window will be closed..
setTimeout(() => {
    if ((lname.hasAttribute("value") == false) && (lpwd.hasAttribute("value") == false)) {
        window.close();
    }
}, 5000);

loginsubmit.addEventListener("click", () => {
    //login validation.
    if (loginp.innerText == 'Login Page') {
        if ((namecheck == true) && (pwdcheck == true)) {
            loginmsg.style.color = 'darkolivegreen';
            loginmsg.innerText = 'Logged in Successfully!!!';
            window.localStorage.setItem("username", lname.value);
            window.localStorage.setItem("loggedin", true);
            if (localStorage.getItem("loggedin") == 'true') {
                setTimeout(() => {
                    window.close();
                }, 3000)
            }
        }
        else if ((namecheck == false) || (pwdcheck == false)) {
            loginmsg.style.color = 'red';
            loginmsg.innerText = 'Please Enter Correct Login  Credentials!'
        }
    }

    //Signup Validation.
    if (loginp.innerText == 'Submit Page') {
        if ((signnamecheck == true) && (signpwdcheck == true)) {
            loginmsg.style.color = 'darkolivegreen';
            loginmsg.innerText = 'Signed Up Successfully!!!';
            window.localStorage.setItem("username", lname.value);
            window.localStorage.setItem("loggedin", true);
            if (localStorage.getItem("loggedin") == 'true') {
                setTimeout(() => {
                    window.close();
                }, 3000)
            }
        }
        else if ((signnamecheck == false) || (signpwdcheck == false)) {
            loginmsg.style.color = 'red';
            loginmsg.innerText = 'Please Enter Correct Signup Credentials!!';
        }
    }

});


