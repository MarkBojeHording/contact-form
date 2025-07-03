document.querySelector('.submit-btn').addEventListener('click', function (e) {
  e.preventDefault();

  let valid = true;

  const inputs = document.querySelectorAll('.field, .message-field');

  inputs.forEach(input => {
    const errorMessage = input.parentElement.querySelector('.required-field');

    if (input.value.trim() === '') {
      errorMessage.style.display = 'block';  // **show the error message in red**
      input.style.borderColor = 'red';        // **make input border red**
    } else {
      errorMessage.style.display = 'none';   // hide error message
      input.style.borderColor = '';           // reset border color
    }
  });

  // Checkbox validation example (similar logic)
  const checkbox = document.querySelector('.custom-checkbox');
  const checkboxError = document.querySelector('.submit-form');
  if (!checkbox.checked) {
    checkboxError.style.display = 'block';
    valid = false;
  } else {
    checkboxError.style.display = 'none';
  }

  // Query type validation example (assuming you toggle .selected class on options)
  const queryTypeError = document.querySelector('.query-type');
  const anySelected = [...document.querySelectorAll('.custom-field')].some(option => option.classList.contains('selected'));
  if (!anySelected) {
    queryTypeError.style.display = 'block';
    valid = false;
  } else {
    queryTypeError.style.display = 'none';
  }

  // Show success message only if valid
  if (valid) {
    document.querySelector('.message-sent').style.display = 'block';
    document.querySelector('.completed-form').style.display = 'block';
  } else {
    document.querySelector('.message-sent').style.display = 'none';
    document.querySelector('.completed-form').style.display = 'none';
  }
});
