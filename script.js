// VALIDATION REGEX
const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-z]{2,}\.[a-z]{2,}(\.[a-z]{2})?$/;
const mobileRegex = /^[0-9]{2}\s[0-9]{10}$/;
const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.{8,}$)(?=[^!@#$%^&*]*[!@#$%^&*][^!@#$%^&*]*$).*/;

// FIRST NAME
document.getElementById("firstName").addEventListener("input", function () {
    document.getElementById("firstNameError").textContent =
        nameRegex.test(this.value)
            ? ""
            : "Must begin with capital & min 3 letters";
});

// EMAIL
document.getElementById("email").addEventListener("input", function () {
    document.getElementById("emailError").textContent =
        emailRegex.test(this.value)
            ? ""
            : "Invalid email format (abc.xyz@bl.co.in)";
});

// MOBILE
document.getElementById("mobile").addEventListener("input", function () {
    document.getElementById("mobileError").textContent =
        mobileRegex.test(this.value)
            ? ""
            : "Format: 91 9919819801";
});

// PASSWORD
document.getElementById("password").addEventListener("input", function () {
    document.getElementById("passwordError").textContent =
        passwordRegex.test(this.value)
            ? ""
            : "8 chars, 1 Uppercase, 1 digit, EXACTLY 1 special char";
});

// SALARY UPDATE
document.getElementById("salary").addEventListener("input", function () {
    document.getElementById("salaryValue").textContent = this.value;
});

// FORM SUBMIT
document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let f = document.getElementById("firstName").value;
    let em = document.getElementById("email").value;
    let mob = document.getElementById("mobile").value;
    let pass = document.getElementById("password").value;

    if (
        nameRegex.test(f) &&
        emailRegex.test(em) &&
        mobileRegex.test(mob) &&
        passwordRegex.test(pass)
    ) {
        alert("Form submitted successfully!");
    } else {
        alert("Please correct the errors before submitting.");
    }
});
