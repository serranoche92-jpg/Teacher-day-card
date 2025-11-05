function updateCard() {
    const teacherName = document.getElementById('teacherName').value;
    const personalMessage = document.getElementById('personalMessage').value;

    const displayName = document.getElementById('displayName');
    const displayMessage = document.getElementById('displayMessage');

    displayName.style.opacity = '0';
    displayMessage.style.opacity = '0';

    setTimeout(() => {
        displayName.textContent = teacherName ? `Dear ${teacherName},` : 'Dear Teacher,';
        displayMessage.textContent = personalMessage || 'Thank you for being an amazing teacher!';

        displayName.style.opacity = '1';
        displayMessage.style.opacity = '1';
    }, 200);

    const button = document.querySelector('.update-btn');
    button.style.transform = 'scale(0.95)';
    button.textContent = 'Updated! ✨';

    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.textContent = 'Update Card 🎨';
    }, 500);
}

// Add smooth transitions
document.getElementById('displayName').style.transition = 'opacity 0.3s ease';
document.getElementById('displayMessage').style.transition = 'opacity 0.3s ease';

// Card hover effect
const card = document.querySelector('.card');
card.addEventListener('mouseenter', function() {
    this.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(2deg) scale(1.02)';
});
card.addEventListener('mouseleave', function() {
    this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
});
