# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Contact form solution](#frontend-mentor---contact-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Contact Form Screenshot](./design/desktop-preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/MarkBojeHording/contact-form)
- Live Site URL: [Live Demo](https://markbojehording.github.io/contact-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS variables)
- Flexbox for layout
- CSS Grid for responsive design
- Mobile-first responsive workflow
- Vanilla JavaScript for form validation and interactions
- Custom form styling with accessibility features
- SVG icons for visual elements

### What I learned

This project helped me strengthen my understanding of several key web development concepts:

**Form Validation & User Experience:**
- Implemented comprehensive form validation with real-time feedback
- Created custom error messages that appear dynamically
- Built a success message system that appears at the top of the form

**CSS Positioning & Layout:**
- Used absolute positioning for the success message overlay
- Implemented responsive design that works across all device sizes
- Created custom form elements (radio buttons, checkboxes) with proper styling

**JavaScript Event Handling:**
```javascript
customFields.forEach(field => {
  field.addEventListener('click', function() {
    customFields.forEach(f => f.classList.remove('selected'));
    this.classList.add('selected');
  });
});
```

**Accessibility Features:**
- Ensured all form elements are keyboard navigable
- Added proper ARIA labels and semantic HTML
- Implemented focus states for all interactive elements

**Custom Form Elements:**
```css
.custom-checkbox:checked + .custom-square {
  background: transparent;
  border: none;
  background-image: url('assets/images/icon-checkbox-check.svg');
  background-size: 18px 18px;
}
```

### Continued development

Areas I'd like to focus on in future projects:

1. **Advanced Form Validation**: Implement more sophisticated validation patterns and real-time field validation
2. **Animation & Transitions**: Add smooth animations for form interactions and state changes
3. **Backend Integration**: Connect forms to actual backend services for data processing
4. **Accessibility Testing**: Use screen readers and accessibility tools to ensure better compliance
5. **Performance Optimization**: Implement lazy loading and optimize asset delivery

### Useful resources

- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Comprehensive guide on form validation techniques
- [CSS-Tricks - Custom Form Elements](https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/) - Great resource for styling form elements
- [Web.dev - Form Accessibility](https://web.dev/learn/forms/accessibility) - Best practices for accessible forms
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - Helpful community for getting feedback and tips

## Author

- Frontend Mentor - [@markhording](https://www.frontendmentor.io/profile/markhording)
- GitHub - [@MarkBojeHording](https://github.com/MarkBojeHording)

---

This project was built as part of the Frontend Mentor challenges to improve my frontend development skills. The contact form includes all required functionality with a focus on accessibility and user experience.
