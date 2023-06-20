$(".tick-container").click(function () {
    $(".tick").toggle();
    if ($('#acceptMarketing').prop('checked')) {
        $('#acceptMarketing').prop('checked', false);
    }
    else {
        $('#acceptMarketing').prop('checked', true);
	}
});

//passwords
var passwordInput = $('#password');
var passwordRepeatInput = $('#passwordRepeat');
var errorMessage = $('#reg-error-message');

var sendButton = $('#btn-registrate');

function checkPasswordMatch() {
    var password = passwordInput.val();
    var passwordRepeat = passwordRepeatInput.val();

    if (password === passwordRepeat) {
        sendButton.prop('disabled', false);
        errorMessage.text('');
    } else {
        sendButton.prop('disabled', true);
        errorMessage.text('Паролі не співпадають');
    }
}

passwordInput.on('input', checkPasswordMatch);
passwordRepeatInput.on('input', checkPasswordMatch);

function telephoneInput() {
    $(".reg-err-message-tel").css("display", "none");
}

function mailInput() {
    $(".reg-err-message-mail").css("display", "none");
}

var telInput = $('#phone');
var loginInput = $('#email');
telInput.on('input', telephoneInput);
loginInput.on('input', mailInput);

//check tick
$('#reg-form').submit(function (event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Check if the checkbox is checked
    if (!($('#acceptMarketing').prop('checked'))) {
        if ($("#password").text().length != 0) {
            // Display an error message or perform any desired actions
            alert('Checkbox is required!');
            return;
        }
    }

    // If the checkbox is checked, proceed with form submission
    $('#acceptMarketing').prop('checked', false);
    this.submit();
});