// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username="Soumya@123";
let password="54321";
let ent_username="Soumya@123";
let ent_password="54321";
if(username==ent_username){
  if(password==ent_password){
    console.log("Login Successful")
  }
  else{
    console.log("Password Worng")
  }
}
else{
  console.log("Username not found")
}