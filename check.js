function validateEm(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
   }
   function Validation() {
   var val=true;
   if(document.messForm.fname.value == "") {
   alert("First Name Can not be EMPTY !!");
   val=false;
   }
   else if(document.messForm.sname.value == "") {
   alert("Family Name Can not be EMPTY !!");
   val=false;
   }
   else if(document.messForm.email.value == ""){
   alert("E-mail Can not be EMPTY !!");
   val=false;
   }
   else if(!validateEm(document.messForm.email.value))
   {
   val = false;
   alert("Invalid email format");
   }
   else if(document.messForm.message.value == ""){
    alert("Write Your Message to sent it :)");
    val=false;
   }
return val;
}

function check()
{
  if(Validation())
  {
    alert("Your message has been sent ;)");
    sessionStorage.setItem("logged", document.messForm.email.value);
    window.location.href = "Home.html";
  }
}