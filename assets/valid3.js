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
var dataString = $(this).serialize(); // to get the form data
                
$.ajax({
type: "POST",
url: "https://script.google.com/macros/s/AKfycbyH9fYXEcv4D5T00fPNcnnSyJ2gABuVRj5nUaW-qDUQiAd70MWQ/exec",
data: dataString,
beforeSend: function() {
    ldbtn3.toggle();
},
complete: function(data) {
    alertify.alert()
    .setting({
    'title':'یوتاب',
    'label':'تایید',
    'message': 'سفارش شما با موفقیت ثبت گردید و اطلاعات آن با ایمیل برایتان ارسال شد. بزودی با شما تماس خواهیم گرفت. با تشکر',
    }).show();
    ldbtn3.toggle();
}
});
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

var ldbtn3 = new ldLoader({root: "#orderbtn"});
