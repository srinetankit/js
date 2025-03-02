const userId = 12345;
let userEmail = "ankit@google.com";
var password = "user@123";
userCity = "Delhi";
let userState;

/* Prefer not to use var
    because of issue in block scope and functional scope
*/
// userId = 67890;  //Not allowed
userEmail = "singh@google.com";
password = "new@321";
userCity = "Bengaluru";

console.table([userEmail, password, userCity, userState]);