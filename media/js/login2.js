
let loginForm = document.getElementById('login_form');
let regiterForm = document.getElementById('register_form');
let btnLogin = document.getElementById("btn_login");
let btnSubmit = document.getElementById("btnSubmit");
let btnLogout = document.getElementById("btn_logout");
let btnRegister = document.getElementById("btn_register");
let btnSubmitRegister = document.getElementById("btnRegister");
let userName = document.getElementById("userName");
let password = document.getElementById("pass");
let userForm = document.getElementById("user_form");
let adminForm = document.getElementById("admin_form");
let sideName = document.getElementById('user_name');
let btn_admin = document.getElementById("btn_admin");
btnLogout.style.display = 'none';
btn_admin.style.display = "none";

//sự kiện của nút login và sign up
btnLogin.addEventListener("click", function () {
    showLoginForm();
});
btnRegister.addEventListener("click", function (event) {
    event.preventDefault();
    showRegisterForm();
});
btnSubmit.addEventListener("click", function (e) {
    e.preventDefault()
    let user = JSON.parse(localStorage.getItem('userData'));
    let checkuser;
    let role;
    for (item of user) {
        if (item.userName == userName.value && item.password == password.value) {
            checkuser = true;
            role = item.role;
        }
    }
    if (userName.value == '' || password.value == '') {
        alert("Xin mời đăng ký")
    }
    else if (checkuser) {
        alert('Thành công ');
        if (role == 'admin'){
        sideName.innerHTML = role;
        btnLogin.style.display = "none";
        btn_admin.style.display = "block"
        modal.style.display = "none";
        } else {
        btnLogin.style.display = "none";
        // sideName.innerHTML = `Hi, ${passRe.value == localStorage.getItem(userRe.value)}`;
        sideName.innerHTML = item.userName + ', Hello đầu moi! ';
        modal.style.display = "none";
        }
        btnLogout.style.display = 'block';
        

        
        // btnLogout.style.display = 'block';
    }
    else
        alert('Sai thông tin');
}
);

btnRegister.addEventListener("click", function () {
    showSignupform();
});

let userRe = document.getElementById('newuserName');
let passRe = document.getElementById('password');
let cfpassRe = document.getElementById('confirmPassword');

btnSubmitRegister.addEventListener("click", function () {
    if (passRe.value == cfpassRe.value) {
        alert('ĐĂNG KÍ THÀNH CÔNG');
        user.push({
            userName: userRe.value,
            password: passRe.value,
            role: 'client',
        })
        localStorage.setItem('userData', JSON.stringify(user));
    }
    else
        alert('Đăng kí không thành công');
}
);

btnLogout.addEventListener("click", function () {
    sideName.style.display = 'none';
    btnLogout.style.display = 'none';
    btn_admin.style.display = "none"
    
    showLoginform();
});

// function cho login và sign up
function showLoginform() {
    loginForm.style.display = "block";
    btnLogin.style.display = "block";
    cartForm.style.display = "block";
    regiterForm.style.display = "none";
    userForm.style.display = "none";
    btnLogin.style.display = "none";
}

function showSignupform() {
    regiterForm.style.display = "block";
    loginForm.style.display = "none";
}

function showadminform() {
    adminForm.style.display = "block";
    loginForm.style.display = "none";
    btnLogout.style.display = "block";
    btnLogin.style.display = "none";
}

function showClientform() {
    loginForm.style.display = "none";
    btnLogin.style.display = "none";
    userForm.style.display = "block";
    cartForm.style.display = "block";
    btnLogout.style.display = "block";
}
function showRegisterForm() {
    in02.style.display = "block";
    // form.style.display = "none";
    // btnSubmitRegister.style.display= "block";
    // userForm.style.display= "block";
    // console.dir(loginForm.style.display)
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
btn_admin.addEventListener("click",  function () {
    suaxoa.style.display = 'block'
})

nutsuaxoa.addEventListener("click",  function () {
    suaxoa.style.display = 'none'
 })