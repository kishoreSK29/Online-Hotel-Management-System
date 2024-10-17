document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your booking!');
    this.reset(); // Reset the form
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
    this.reset(); // Reset the form
});

// Optionally, add click event to view details button
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
        alert('Details for this room would go here!');
    });
});
