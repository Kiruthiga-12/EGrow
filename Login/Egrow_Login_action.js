let loga1 = document.getElementById("loga1");
let loga2 = document.getElementById("loga2");
let loginp = document.getElementById("loginp");
let loginsubmit = document.getElementById("loginsubmit");
let lname = document.getElementById("lname");
let lpwd = document.getElementById("lpwd");
let loginmsg = document.getElementById("loginmsg");
let lp = document.getElementById("lp");
let namecheck = false ;
let pwdcheck = false;
let signnamecheck = false;
let signpwdcheck = false;

loga1.addEventListener("click", () => {
    lname.value = '';
    lpwd.value = '';
    loginp.innerText = 'Login Page';
    loginsubmit.value = 'Login';
    loginmsg.style.color = 'black'
    loginmsg.innerHTML = `Enter UserID only with Alphabets with minimum 3 characters eg: Abc <br/>Enter password as numbers which is of length 4 Eg:1111`
});
loga2.addEventListener("click", () => {
      lname.value = '';
    lpwd.value = '';
    loginp.innerText = 'Signup Page';
    loginsubmit.value = 'Sign up';
    loginmsg.style.color = 'black';
    loginmsg.innerHTML = `Enter UserID only with Alphabets with minimum 3 characters eg: Abc <br/>Enter password as numbers which is of length 4 Eg:1111`
});

let pat = /^[a-zA-Z]{3,}$/;
let pwd = /^[0-9]{4}$/;

//getting Name value:
lname.addEventListener("input", (e) => {
                lname.value = e.target.value
})

//getting pwd:
lpwd.addEventListener("input", (e) => {
        lpwd.value = e.target.value;

})



loginsubmit.addEventListener("click", () => {
    //login validation.
    if (loginp.innerText == 'Login Page') {
        let userid = localStorage.getItem('username');
        let userpwd = localStorage.getItem('userpwd');
              namecheck = pat.test(lname.value);
                     pwdcheck = pwd.test(lpwd.value);
        if(userid && userpwd)
       { 
        let flg = (userid == lname.value) ? true:false;
        let flg1 =  (userpwd == lpwd.value) ? true:false;
        if ((namecheck == true) && (pwdcheck == true) && (flg==true && flg1 == true)) {
            loginmsg.style.color = 'darkolivegreen';
            loginmsg.innerText = 'Logged in Successfully!!!';
            window.localStorage.setItem("username", lname.value);
            window.localStorage.setItem("userpwd", lpwd.value);
            window.localStorage.setItem("loggedin", true);
            if (localStorage.getItem("loggedin") == "true") {
                 alert('Logged in Successfully!! , redirecting to Home page!!');
                 window.close();
                 window.open('../index.html','_blank');

            }
        }
        else if (((namecheck == false) || (pwdcheck == false)) && ((flg ==true) || (flg1 == true)) ){
            loginmsg.style.color = 'red';
            loginmsg.innerText = 'Please Enter Correct Login  Credentials!'
        }
         else if (((namecheck == false) || (pwdcheck == false)) && ((flg ==false) || (flg1 == false)) ){
            loginmsg.style.color = 'red';
            loginmsg.innerText = 'Please Enter Correct Login  Credentials!'
        }
         else if ((namecheck == true) && (pwdcheck == true) && ((flg == false) || (flg1 == false))) {
            loginmsg.style.color = 'red';
            loginmsg.innerText = 'Incorrect User Id/ Password.Details doesn\'t match with Signup details!'
        }}
        else{
             loginmsg.style.color = 'blue';
             loginmsg.innerText = 'You don\'t have account! Please Signup!!'
        }
    }

    //Signup Validation.
    else if (loginp.innerText == 'Signup Page') {
                  signnamecheck = pat.test(lname.value);
               signpwdcheck = pwd.test(lpwd.value);
        if ((signnamecheck == true) && (signpwdcheck == true)) {
            loginmsg.style.color = 'darkolivegreen';
            alert( 'Signed Up Successfully. Redirecting to Login page!');
            window.localStorage.setItem("username", lname.value);
                  window.localStorage.setItem("userpwd", lpwd.value);
            loginp.innerText = 'Login Page';
            loginsubmit.value = 'Login';
            lname.value = '';
            lpwd.value = '';
            loginmsg.style.color = 'darkolivegreen'
    loginmsg.innerHTML = `Enter UserID only with Alphabets with minimum 3 characters eg: Abc <br/>Enter password as numbers which is of length 4 Eg:1111`
        }
        else if ((signnamecheck == false) || (signpwdcheck == false)) {
            loginmsg.style.color = 'red';
            loginmsg.innerText = 'Please Enter Correct Signup Credentials!!';
        }
    }

});

