// ===== ENQUIRY FORM FEEDBACK =====
    // Function: handleContactFormSubmit()
    // Purpose: Provide immediate confirmation feedback for the enquiry form
    // Triggers: Submit event on the contact form
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function handleContactFormSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const matter = document.getElementById('matter').value.trim();
      formStatus.textContent = `Thank you, ${name || 'client'}. Your enquiry about ${matter || 'your legal matter'} has been noted. Please expect a response during office hours.`;
      contactForm.reset();
    });