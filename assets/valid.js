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
var forms = document.getElementsByClassName('needs-validation');
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
url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScIuk7kTrCveD4XrkgZ3qk05d_1qKGQ5RQ_EQAHEgMoFQSgvA/formResponse",
data: dataString,
beforeSend: function() {
    ldbtn2.toggle();
},
complete: function(data) {
    alertify.confirm('اطلاعات شما با موفقیت در سامانه یوتاب ثبت گردید و کد کاربری از طریق ایمیل برایتان ارسال شد. از شما صمیمانه سپاسگزاریم').set('onok', function(closeEvent){location.reload();} );
    ldbtn2.toggle();
}
});
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

var ldbtn2 = new ldLoader({root: "#register-btn"});
