let form=document.querySelector("form")
let email=document.querySelector("#email")
let emailError=document.querySelector("#emailError")
let password=document.querySelector("#password")
let passwordError=document.querySelector("#passwordError")
    form.addEventListener("submit",function(val){
        val.preventDefault();
            emailError.textContent="";
            passwordError.textContent="";
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let emailtest=emailRegex.test(email.value);
        let passwordtest=passwordRegex.test(password.value);
        let isvallid=true;
        if(!emailtest){
            emailError.textContent="Email is incorrect";
            emailError.style.display="initial";
            isvallid=false;
        }
       
        if(!passwordtest){
            passwordError.textContent="Password is incorrect";
            passwordError.style.display="initial";
            isvallid=false;
        }
       if(isvallid){
        document.querySelector("#resultMsg").textContent="EveryThing is correct";
       }
    })