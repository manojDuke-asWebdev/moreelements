//LVALID
class validation { 
 inputs = {email:"", password:""}
 error = {email:"", password:""}
 total_res = []
 pushIn(){
  this.inputs.email = document.forms[0]['email'].value.trim()
  this.inputs.password = document.forms[0]['password'].value.trim()
 }

/* FIELD VALIDATION */
 /*  EMAIL */
 email() { 
  if(this.inputs.email == ""){
   /* empty fail */
   this.error.email = "Please enter your email";
   this.total_res[0] = false;
  }

  else {
   let regex = /^([a-zA-Z\d\.]+)@([a-zA-Z\d])+(\.[a-z]{2:8})+(\.[a-z]{2:8})?$/
   if(regex.text(this.inputs.email)){
    alert("reached")
    /*success */
    this.total_res[1] = true;
   }
   else{
    /* invalid email fail */
    this.error.email = "Please enter your valid email"
    this.total_res[0] = false;
   }
  }
 }

 /* PASSWORD */
 password(){
  if(this.inputs.password=="") {
   this.error.password = "Please enter your password";
   this.total_res[1] = false;
  }
  else{
   this.total_res[1] = true;
  }
 }

 //EVALUATION
 total_valid(){
  // alert(Boolean(Number(this.total_res[0])*Number(this.total_res[1])))
  return Boolean(Number(this.total_res[0])*Number(this.total_res[1]))
 }

 //MESSAGE
 throw_error(){
  document.getElementById("email").innerText = this.error.email;
  document.getElementById("password").innerText = this.error.password;

 }
 
 //CLEAN ERROR TEXT
 clear_error(){
  if(this.total_res[0] == true){
   this.error.email = "";
  }
  if(this.total_res[1] == true){
   this.error.password = "";
  }
  this.throw_error()
 }
 main(){
  this.pushIn();
  this.email();    
  this.password();
  this.total_valid();
  this.throw_error();
  this.clear_error();
  // alert('hello');
  return this.total_valid();
 }
}

let validate = new validation();
function getSubmit(){
 return validate.main();
}