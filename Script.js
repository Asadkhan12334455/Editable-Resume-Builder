// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var profilePicInput = document.getElementById('profile-pic');
var profilePicDisplay = document.getElementById('display-profile-pic');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var education = document.getElementById('education').value.trim();
    var experience = document.getElementById('experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    // Validate inputs
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill in all fields before generating your resume.");
        return;
    }
    // Display profile picture if uploaded
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicDisplay.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            profilePicDisplay.style.display = "block";
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    // Display the generated resume
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-phone').textContent = phone;
    document.getElementById('display-education').textContent = education;
    document.getElementById('display-experience').textContent = experience;
    document.getElementById('display-skills').textContent = skills;
    // Show resume display section
    resumeDisplayElement.style.display = "block";
});
