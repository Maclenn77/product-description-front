function init(){
    $.ajax({
        url: 'https://dummyjson.com/products',
        type: 'GET',
        success: function(data) {
            
            createProductsTable(data.products);

        },
        error: function() {
          
        }
      });
}
init();

function createProductsTable(products){
    //console.log(products[0])

    for (var i = 0; i < products.length; i++) {
        var producto = products[i];
    
        var fila = '<tr>' +
          '<td><img src="' + producto.thumbnail + '" width="50" height="50"></td>' +
          '<td>' + producto.title + '</td>' +
          '<td>' + producto.category + '</td>' +
          '<td>' + producto.brand + '</td>' +
          '</tr>';
    
        $('#bodyProducts').append(fila);
    }

    var tabla = $('#tablaProducts').DataTable();

    

    $('#tablaProducts tbody').on('click', 'tr', function() {
      var data = tabla.row(this).data();
      console.log(data);
      //window.location.href = ; //$.urlParam('param1');
    });

}

$("#logOut").click(function(){
    window.location.href = "login.html";
  });
    
 