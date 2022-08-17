document.getElementById("btn-submit").addEventListener('click',function(){

    const emailField = document.getElementById("user-email")
    const email = emailField.value;

    const passField = document.getElementById("user-password")
    const password = passField.value;

    if(email === "rakib" && password === "rakib")
    {
        window.location.href = 'bank.html'; 
    }
    else{
        alert("Password Vul disos Joldi Thik kor");
    }
})
