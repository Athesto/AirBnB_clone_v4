$(document).ready(function(){
  var names = []
  var ids = []
  $('.popover input[type="checkbox"]').click(function(){
    if($(this).prop("checked") == true){
      names.push($(this).attr('data-name'))
      ids.push($(this).attr('data-id'))
      $(".amenities h4").html(names.join(','));
    }
    else if($(this).prop("checked") == false){
      names = names.filter(f => f !== $(this).attr('data-name'))
      ids = ids.filter(f => f !== $(this).attr('data-id'))
      $(".amenities h4").html(names.join(','));
    }
  });
});