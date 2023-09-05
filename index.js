function restrictInput(control) {
  const inputField = document.querySelector('#' + control);
  const maxLength = 2;

  inputField.addEventListener('input', function (event) {
    let inputValue = event.target.value;

    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength);
    }

    inputField.value = inputValue;
  });

  inputField.addEventListener('paste', function (event) {
    const pastedText = (event.originalEvent || event).clipboardData.getData(
      'text/plain'
    );
    let sanitizedValue = pastedText;

    if (sanitizedValue.length > maxLength) {
      sanitizedValue = sanitizedValue.slice(0, maxLength);
    }

    inputField.value = sanitizedValue;
  });
}
//***************************************************************************************/
function restrictInput(controlID) {
  const maxLength = 2;
  const inputField = $('#' + controlID);

  inputField.on('input', function (event) {
    let inputValue = event.target.value;

    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength);
    }

    inputField.val(inputValue);
  });

  inputField.on('paste', function (event) {
    event.preventDefault();
    const pastedText = (event.originalEvent || event).clipboardData.getData(
      'text/plain'
    );
    let sanitizedValue = pastedText;

    if (sanitizedValue.length > maxLength) {
      sanitizedValue = sanitizedValue.slice(0, maxLength);
    }

    inputField.val(sanitizedValue);
  });
}
/************************************************************** */
function restrictInput(controlID) {
  const maxLength = 2; 
  const textarea = $('#' + controlID);

  textarea.on('input', function (event) {
    let textareaValue = event.target.value;

    if (textareaValue.length > maxLength) {
      textareaValue = textareaValue.slice(0, maxLength);
    }

    textarea.val(textareaValue);
  });

  textarea.on('paste', function (event) {
    event.preventDefault(); 

    const pastedText = (event.originalEvent || event).clipboardData.getData(
      'text/plain'
    );
    let sanitizedValue = pastedText;

    if (sanitizedValue.length > maxLength) {
      sanitizedValue = sanitizedValue.slice(0, maxLength);
    }

    textarea.val(sanitizedValue);
  });
}
