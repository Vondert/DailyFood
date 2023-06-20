$('#btn-registrate').click(function() {
  var password = $('#password').val();
  var passwordRepeat = $('#passwordRepeat').val();
  var errorMessage = $('#reg-error-message');

  if (password !== passwordRepeat) {
    errorMessage.text('Паролі не співпадають');
  } else {
    errorMessage.text('');
    // Additional code for registration logic
  }
});