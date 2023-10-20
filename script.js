function submitForm() {
    const form = document.getElementById("surveyForm");
    if (form.checkValidity()) {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = [...document.querySelectorAll('input[name="gender"]:checked')].map(el => el.value).join(', ');
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const submittedData = `
            First Name: ${firstName}
            Last Name: ${lastName}
            Date of Birth: ${dob}
            Country: ${country}
            Gender: ${gender}
            Profession: ${profession}
            Email: ${email}
            Mobile Number: ${mobile}
        `;

        document.getElementById("submittedData").innerText = submittedData;
        document.getElementById("popup").classList.remove("hidden");
        form.reset();
    } else {
        alert("Please fill in all required fields.");
    }
}

function resetForm() {
    const form = document.getElementById("surveyForm");
    form.reset();
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}
