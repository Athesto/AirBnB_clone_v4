const Lst = [];
var db
function main() {
  $('.amenities h4').html(Lst.join(','))
  $('.popover ul').change(check)
}
function check(data) {
  db = $('input:checked')
  console.log(db)
  Lst.push($( this )[0].textContent.trim())
}
$(document).ready(main);

