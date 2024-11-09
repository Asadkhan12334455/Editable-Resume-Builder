// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
const profilePicDisplay = document.getElementById('display-profile-pic') as HTMLImageElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

    // Validate inputs
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill in all fields before generating your resume.");
        return;
    }

    // Display profile picture if uploaded
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePicDisplay.src = e.target?.result as string;
            profilePicDisplay.style.display = "block";
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }

    // Display the generated resume
    (document.getElementById('display-name') as HTMLSpanElement).textContent = name;
    (document.getElementById('display-email') as HTMLSpanElement).textContent = email;
    (document.getElementById('display-phone') as HTMLSpanElement).textContent = phone;
    (document.getElementById('display-education') as HTMLParagraphElement).textContent = education;
    (document.getElementById('display-experience') as HTMLParagraphElement).textContent = experience;
    (document.getElementById('display-skills') as HTMLParagraphElement).textContent = skills;

    // Show resume display section
    resumeDisplayElement.style.display = "block";
});
