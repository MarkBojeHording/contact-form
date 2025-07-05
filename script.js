// Test if script is loading
console.log('Script loaded successfully');

// Check if submit button exists
const submitBtn = document.querySelector('.submit-btn');
console.log('Submit button found:', submitBtn);

// Test if button is clickable
if (submitBtn) {
  console.log('Button text:', submitBtn.textContent);
  console.log('Button styles:', window.getComputedStyle(submitBtn));

  // Add a simple test click
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Submit button clicked!');

  let valid = true;

  const inputs = document.querySelectorAll('.field, .message-field');

  inputs.forEach(input => {
    const errorMessage = input.parentElement.querySelector('.required-field');
    console.log('Checking input:', input.className, 'Value:', input.value.trim());

    if (errorMessage) {
      if (input.value.trim() === '') {
        errorMessage.style.display = 'block';
        input.style.borderColor = 'red';
        valid = false;
        console.log('Input validation failed:', input.className);
      } else {
        errorMessage.style.display = 'none';
        input.style.borderColor = '';
        console.log('Input validation passed:', input.className);
      }
    }
  });

  const checkbox = document.querySelector('.custom-checkbox');
  const checkboxError = document.querySelector('.submit-form');
  console.log('Checkbox checked:', checkbox.checked);
  if (!checkbox.checked) {
    checkboxError.style.display = 'block';
    valid = false;
    console.log('Checkbox validation failed');
  } else {
    checkboxError.style.display = 'none';
    console.log('Checkbox validation passed');
  }

  const queryTypeError = document.querySelector('.query-type');
  const anySelected = [...document.querySelectorAll('.custom-field')].some(option => option.classList.contains('selected'));
  if (!anySelected) {
    queryTypeError.style.display = 'block';
    valid = false;
  } else {
    queryTypeError.style.display = 'none';
  }

  console.log('Form validation result:', valid);

  if (valid) {
    document.querySelector('.success-message').classList.add('show');
    console.log('Success message should be shown');
  } else {
    document.querySelector('.success-message').classList.remove('show');
    console.log('Success message hidden due to validation errors');
  }
  });
}

const queryOptions = document.querySelectorAll('.query-options .custom-field');

queryOptions.forEach(option => {
  option.addEventListener('click', function() {
          queryOptions.forEach(opt => {
        opt.classList.remove('selected');
        const circle = opt.querySelector('.circle');
        circle.classList.remove('selected');
        opt.style.backgroundColor = '';
        opt.style.borderColor = '';
      });

      this.classList.add('selected');
      const circle = this.querySelector('.circle');
      circle.classList.add('selected');
      this.style.backgroundColor = 'hsl(148, 38%, 43%, 0.1)';
      this.style.borderColor = 'hsl(148, 38%, 43%)';
  });
});
