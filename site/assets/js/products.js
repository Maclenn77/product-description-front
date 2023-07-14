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
    
        var fila = '<tr>'+
          '<td>' + producto.id + '</td>' +
          '<td>' + producto.description + '</td>' +
          '<td><img src="' + producto.thumbnail + '" width="50" height="50"></td>' +
          '<td>' + producto.title + '</td>' +
          '<td>' + producto.category + '</td>' +
          '<td>' + producto.brand + '</td>' +
          '</tr>';
    
        $('#bodyProducts').append(fila);
    }

    //var tabla = $('#tablaProducts').DataTable();

    var table = $('#tablaProducts').DataTable({
      language: {
          "decimal": "",
          "emptyTable": "No hay información",
          "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
          "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
          "infoFiltered": "(Filtrado de _MAX_ total entradas)",
          "infoPostFix": "",
          "thousands": ",",
          "lengthMenu": "Mostrar _MENU_ Entradas",
          "loadingRecords": "Cargando...",
          "processing": "Procesando...",
          "search": "Buscar:",
          "zeroRecords": "Sin resultados encontrados",
          "paginate": {
              "first": "Primero",
              "last": "Ultimo",
              "next": "Siguiente",
              "previous": "Anterior"
          }
      },
      "columnDefs": [
        {
            "targets": [ 0 ],
            "visible": false,
            "searchable": false
        },
        {
            "targets": [ 1],
            "visible": false,
            "searchable": false
        }
    ]
     
  });
    

    $('#tablaProducts tbody').on('click', 'tr', function() {
      var data = table.row(this).data();
      console.log(data[0]);
      //window.location.href = ; //$.urlParam('param1');
      window.location.href = "product.html?id="+data[0];
    });

}

$("#logOut").click(function(){
    window.location.href = "login.html";
  });
    
 