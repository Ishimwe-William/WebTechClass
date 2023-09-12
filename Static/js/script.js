document.addEventListener("DOMContentLoaded", function () {
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form input values
        const nameInput = document.getElementById("the_name").value;
        const emailInput = document.getElementById("the_email").value;
        const phoneInput = document.getElementById("the_phone").value;
        const districtInput = document.getElementById("the_parent").value;
        const dobInput = document.getElementById("the_dob").value;

        // Basic phone number validation (10 digits)
        const phonePattern = /^07\d{8}$/;
        if (!phonePattern.test(phoneInput)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Date of birth validation (not in the future)
        const currentDate = new Date();
        const selectedDate = new Date(dobInput);
        if (selectedDate-5 > currentDate) {
            alert("Please enter a valid date of birth.");
            return;
        }

        // If all validations pass, display the input values
        alert(`Information to be submitted:\nName: ${nameInput}\nEmail: ${emailInput}\nPhone: ${phoneInput}\nDistrict: ${districtInput}\nDate of Birth: ${dobInput}`);
    }

    // Attach the form submission handler to the form
    const gbForm = document.forms["admissionForm"];
    gbForm.addEventListener("submit", handleFormSubmission);

});

function previewImage(input) {
    const preview = document.getElementById('preview');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        // Display a placeholder image if no file is selected
        preview.src = 'placeholder-image.jpg';
    }
}
