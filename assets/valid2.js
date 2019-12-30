(function() {
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation2');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
if (form.checkValidity() === true) {
	if ($("#inputname").val() !== '') {
	event.preventDefault(); // to prevent default page reloading
	  $('#order-form').attr('hidden', 'true');
	  $('#btn-btn').attr('hidden', 'true');
      	  $('#user-order').removeAttr('hidden');
	}
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();
