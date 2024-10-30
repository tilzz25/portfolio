
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if>= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});


function toggleProjectDetails(projectId) {
    const details = document.getElementById(`project${projectId}-details`);
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let valid = true;
    let feedback = '';

    if (name === '' || email === '' || message === '') {
        feedback = 'Please fill out all fields.';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        feedback = 'Please enter a valid email address.';
        valid = false;
    } else if (message.length < 10) {
        feedback = 'Message must be at least 10 characters long.';
        valid = false;
    }

    document.getElementById('form-feedback').innerHTML = feedback;
    return valid;
}
