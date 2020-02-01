(function() {
    window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation3');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
if (form.checkValidity() === true) {
event.preventDefault(); // to prevent default page reloading
var dataString = $(this).serialize(); // to get the form data
$.ajax({
type: "POST",
url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScAMlOpsQOXLjYqB22kPeqE7lcU1t6eUE9HHWJV0EyBQtbD4w/formResponse",
data: dataString,
beforeSend: function() {
    $( "submit-form" ).addClass( "running" );
},
complete: toggleAlert
});
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

function toggleAlert() {
	alertify.success('پیام شما با موفقیت ارسال گردید. با تشکر');
}
