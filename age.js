//variable declarations
let user_age;
let user_age_check = document.getElementById("statement");

//setter function to assign value to age and statement
function set_age() {

  //adds an event listener that handles each time the form submits
  document.getElementById("myForm").addEventListener("submit", function(event) {

    //prevents page reloading
    event.preventDefault();
    
    //age assignment
    let age = document.getElementById("age").value;
    user_age = age;

    //controls flow for determining appropriate message relative to the age range
    if (get_age() < 25) {
      user_age_check.textContent = "They're "+ get_age()+ " old and they're younger than Google."; 
    } else if (get_age() == 25) {
      user_age_check.textContent = "They're "+ get_age()+ " and they're as old as Google."; 
    } else {
      user_age_check.textContent = "They're "+ get_age()+ " and they're older than Google."; 
    }
  });
}

//returns age
function get_age() {
  return user_age;
}

//calls the set function
set_age();