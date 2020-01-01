$(function() {
  $("#order-form").on("submit",function(e) {
    if ($("#inputname").val() = '') {
      alert('لطفا کد کاربری را درست وارد کنید');
      return false; // cancel submit
    }
      $('#order-form').attr('hidden', 'true');
      $('#btn-btn').attr('hidden', 'true');
      $('#user-order').removeAttr('hidden');
  });
});
