var Push = {
    productPush : function (id, pagename){
        document.querySelector('ons-navigator').pushPage("pages/productPush.html", {
            data:{
                    title: pagename,
                    id: id
            }
        });
    },
}