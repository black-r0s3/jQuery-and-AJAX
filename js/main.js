  $(document).ready(function() {
  $('#button-create-item').on('click', function () {
    let name = $('#input-create-item').val();
    $('#input-create-item').val('');

    let html = '';
    html+='<div class="item">'
    html+='<div class="name">' + name +   '  </div>'
    html+='<img src="assets/beach.jpg">'
    html+='<div class="description">'

    html+='</div>'
    html+='<div class="price">499</div>'
    html+='<button type="button" name="button">Add to cart</button>'
    html+='<br>'
    html+='<a href="#">More Info</a>'
    html+='<div class="more-info">Lorem ipsumm dlor sitt  </div>'

    html+='</div>'
    $('#container').prepend(html);

  });

});
