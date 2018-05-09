ons.platform.select('ios');
$(function () {
  Service.getProducts().then(function (message, datas) {
    datas.forEach(data => {
      if (data.id % 2) {
        var template = $('#productsTemplate').html();
        var rendered = Mustache.render(template, data);
        $('#resultsCol1').append(rendered);
      }
      else{
        var template = $('#productsTemplate').html();
        var rendered = Mustache.render(template, data);
        $('#resultsCol2').append(rendered);
      }      
    });
  });
})