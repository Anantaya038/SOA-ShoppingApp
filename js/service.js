var Service = {
    getProducts : function(){
        var deferred = new $.Deferred();
        $.ajax({
            url: "https://soaproductapi.herokuapp.com/products",
            cache: false,
            type: "GET",
            success: function(data){
             if (data) {
                 deferred.resolve("Done", data)
             }else{
                 deferred.resolve("Error")
             }
            }
        });
        return deferred.promise();
    },
    getReviews : function(){
        var deferred = new $.Deferred();
        $.ajax({
            url: "https://pacific-peak-27279.herokuapp.com/api/ProductReview",
            cache: false,
            type: "GET",
            success: function(data){
             if (data) {
                 deferred.resolve("Done", data)
             }else{
                 deferred.resolve("Error")
             }
            }
        });
        return deferred.promise();
    },
    getCustomers : function(){
        var deferred = new $.Deferred();
        $.ajax({
            url: "https://customer-api-shopping.herokuapp.com/api/customers",
            cache: false,
            type: "GET",
            success: function(data){
             if (data) {
                 deferred.resolve("Done", data)
             }else{
                 deferred.resolve("Error")
             }
            }
        });
        return deferred.promise();
    },
    getLogistic : function(){
        var deferred = new $.Deferred();
        $.ajax({
            url: "http://servicelogistics20180505020236.azurewebsites.net/api/Logistics",
            cache: false,
            type: "GET",
            success: function(data){
             if (data) {
                 deferred.resolve("Done", data)
             }else{
                 deferred.resolve("Error")
             }
            }
        });
        return deferred.promise();
    },
    getProductsById : function(id){
        var deferred = new $.Deferred();
        $.ajax({
            url: "https://soaproductapi.herokuapp.com/products",
            cache: false,
            type: "GET",
            success: function(data){
             if (data) {
                 deferred.resolve("Done", data[id-1])
             }else{
                 deferred.resolve("Error")
             }
            }
        });
        return deferred.promise();
    }
}