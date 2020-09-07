const signUpButton = document.getElementById('signuplinked');
const signInButton = document.getElementById('signinlinked');
const form1 = document.getElementById('logforms');
const form2 = document.getElementById('sigforms');

// const cr = document.getElementById('cr');
// const si = document.getElementById('si');

signInButton.addEventListener('click', () => {
    form1.classList.add("rightactivebak");
    form2.classList.add("leftactivebak");
    form1.classList.remove("rightactive");
    form2.classList.remove("leftactive");
    
    // cr.classList.remove("closed");
    // cr.classList.add("opened");
    // si.classList.remove("opened");
    // si.classList.add("closed");
    
});

signUpButton.addEventListener('click', () => {
    form1.classList.add("rightactive");
    form2.classList.add("leftactive");
    form1.classList.remove("rightactivebak");
    form2.classList.remove("leftactivebak");

    // cr.classList.remove("opened");
    // cr.classList.add("closed");
    // si.classList.remove("closed");
    // si.classList.add("opened");
});

