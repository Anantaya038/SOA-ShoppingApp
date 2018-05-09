ons.platform.select('ios');
var productData;
$(function () {
  Service.getProducts().then(function (message, datas) { // Get  all Products
      datas.forEach(data => {
        if (data.productID % 2) { // To Seperate column of product template
          var template = $('#productsTemplate').html();
          var rendered = Mustache.render(template, data);
          $('#resultsCol1').append(rendered); // To render the template to target
        }else{
          var template = $('#productsTemplate').html();
          var rendered = Mustache.render(template, data);
          $('#resultsCol2').append(rendered); // To render the template to target
        }      
      });
  });  
})