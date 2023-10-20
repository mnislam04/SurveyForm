// Validate the form
function validateForm() {
    var form = document.getElementById('survey-form');
    var first_name = form.elements['first-name'].value;
    var last_name = form.elements['last-name'].value;
    var date_of_birth = form.elements['date-of-birth'].value;
    var country = form.elements['country'].value;
    var gender = form.elements['gender'].value;
    var profession = form.elements['profession'].value;
    var email = form.elements['email'].value;
    var mobile_number = form.elements['mobile-number'].value;
  
    // Check if all fields are filled in
    if (first_name === '' || last_name === '' || date_of_birth === '' || country === '' || gender === '' || profession === '' || email === '' || mobile_number === '') {
      alert('Please fill in all required fields.');
      return false;