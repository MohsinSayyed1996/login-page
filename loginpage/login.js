let form=document.querySelector("form");
let userName=document.querySelectorAll("input")[0];
let password=document.querySelectorAll("input")[1];
let euser=document.querySelectorAll("span")[0];
let epassword=document.querySelectorAll("span")[1];
let eform=document.querySelectorAll("span")[2];

form.addEventListener("submit",(e)=>{
    euser.innerHTML="";
    epassword.innerHTML="";
    e.preventDefault();

    if(userName.value=="" && password.value==""){
       // alert("user name and password required");
       //confirm("username and password required");
       euser.innerHTML="user name required";
       epassword.innerHTML="password is required";
       e.preventDefault()
    }
    else if(userName.value==""){
       // alert("user name is required")
       //confirm("username is required")
       euser.innerHTML="username required";
       e.preventDefault();
    }
    else if(password.value==""){
       // alert("password is required")
       epassword.innerHTML="password is required";
       e.preventDefault();

    }
    else if(userName.value=="mohsinsayyed206@gmail.com" && password.value=="1234"){
        alert("welcome to the page")
    }
    else{
        eform.innerHTML="credential not matching"
        e.preventDefault();
    }
});