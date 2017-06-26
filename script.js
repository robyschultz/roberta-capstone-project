$(function(){
  $('#reply').hide();

  $('#btn').click(function(){
      console.log('Form sent');
      $('#reply').show();
      $('#surveyForm').hide();
      $('#btn').hide();

  });

});
