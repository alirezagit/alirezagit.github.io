$('#submit_btn').on('click', function(event) {
    event.preventDefault();
    var str = $('#userid').val();
$.ajax({
   url: "https://docs.google.com/spreadsheets/d/14TYS9UBM5PETa2Y3_l68nwJZTjxjJkg9hMnOiizN3Gg/gviz/tq?tqx=out:html&tq=SELECT+B,+C,+D,+F,+G,+H+WHERE+H=" + "+" + "'" + str + "'",
   context: document.body
   }).done(function(data) {
      $('#new-projects').append(data);
    	$('table').prop('id', 'userdata');
  });
});

function GFG_Fun() { 
document.getElementById('userno').value = 
Math.random().toString(36).slice(2); 
}

$('#submitt_btn').on('click', function(event) {
      $('#city').val( $('#userdata').find('td:nth-child(4)').eq(1).html() );
      $('#stateCode').val( $('#userdata').find('td:nth-child(5)').eq(1).html() );
});
