(function() {
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation4');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
if (form.checkValidity() === true) {
event.preventDefault(); // to prevent default page reloading
spin
var dataString = $(this).serialize(); // to get the form data
                
$.ajax({
type: "POST",
url: "https://script.google.com/macros/s/AKfycbyH9fYXEcv4D5T00fPNcnnSyJ2gABuVRj5nUaW-qDUQiAd70MWQ/exec",
data: dataString,
complete: Execc
});
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

function Execc() {
	$("spinner").prop("hidden", true);
	alert("سفارش شما با موفقیت ثبت گردید و اطلاعات آن با ایمیل برایتان ارسال شد. بزودی با شما تماس خواهیم گرفت. با تشکر");
	$('#modal').modal('toggle');
	$('#user-form')[0].reset();
	location.reload()
}

function spin() {
	$("spinner").removeAttr("hidden");
}
