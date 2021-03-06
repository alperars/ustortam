function validateForm() {
  var status=false
   var name=document.querySelector("#name").value;
  if (name == "") {
    document.getElementById("errname").innerHTML="Name must be filled out.";
    status=false;
  }
  else{
    document.getElementById("errname").innerHTML="";
  }
  var mail = document.querySelector("#mail").value;
  if (mail==""){
    document.getElementById("errmail").innerHTML="E-mail must be filled out.";
    status=false;
  }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    document.getElementById("errmail").innerHTML="";
  }else{
    document.getElementById("errmail").innerHTML="Invalid e-mail address.";
    status=false;
  }
  var numeric = document.querySelector("#numeric").value;
  if(numeric==""){
    document.getElementById("errnumeric").innerHTML="This field cannot be empty.";
    status=false;
  }else if(isNaN(numeric)){
    document.getElementById("errnumeric").innerHTML="Only numbers are allowed.";
    status=false;
  }else{
    document.getElementById("errnumeric").innerHTML="";
  }
  var num12= document.querySelector("#num12").value;
  if(num12==""){
    document.getElementById("errnum12").innerHTML="This 12-digit field cannot be empty.";
    status=false;
  }else if(num12.length != 12){
    document.getElementById("errnum12").innerHTML="Only 12-digit values are allowed.";
    status=false;
  }else{
    document.getElementById("errnum12").innerHTML="";
  }
  var abc=document.querySelector("#abc").value;
  var alpha=/^[A-Za-z]+$/;
  if(abc==""){
    document.getElementById("errabc").innerHTML="This only letter field cannot be empty.";
    status=false;
  }else if(abc.match(alpha)){
    document.getElementById("errabc").innerHTML="";
    status=false;
  }else{
    document.getElementById("errabc").innerHTML="Only letters are allowed.";
  }
  var max30=document.querySelector("#max30").value;
  if (max30==""){
    document.getElementById("errmax30").innerHTML="This string field cannot be empty.";
  }else if(max30.match(alpha)==false){
    document.getElementById("errmax30").innerHTML="Only letters are allowed.";
    }
  else{
     if(max30.length>30){
      document.getElementById("errmax30").innerHTML="Maximum string length is 30.";
    }else{
      document.getElementById("errmax30").innerHTML="";
    }
  }
  var threew=document.querySelector("#threew").value;
  var words=threew.split(' ');
  if(threew==""){
    document.getElementById("errthreew").innerHTML="This field cannot be empty.";
  }else if(words.length!=3){
    document.getElementById("errthreew").innerHTML="This field must be filled with 3 words.";
  }else{
    document.getElementById("errthreew").innerHTML="";
  }
  var password=document.querySelector("#password").value;
  var rule= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
  if(password==""){
    document.getElementById("errpassword").innerHTML="This field cannot be empty.";
  }else if(password.match(rule)){
    document.getElementById("errpassword").innerHTML="";
  }else{
    document.getElementById("errpassword").innerHTML="Invalid password.Please check password rules.";
  }
return false;
}