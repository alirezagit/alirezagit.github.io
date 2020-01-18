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
                
  var content = document.getElementById("customFile").value
  if (content === "") {
	document.getElementById('user-form').submit();
  }
  else
  var reader = new FileReader();
  var file = document.getElementById('customFile').files[0];
  reader.onload = function(){
    document.getElementById('fileContent').value=reader.result;
	document.getElementById('filename').value=file.name;
	document.getElementById('user-form').submit();
  }
	reader.readAsDataURL(file);
}

}
form.classList.add('was-validated');
}, false);
});
}, false);
})()
