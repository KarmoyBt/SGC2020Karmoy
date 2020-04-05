

$( document ).ready(function() {

	buclecartas(54);// number of cards
	
	galletas();//setup cookies

    accion();// events
  
    
});



function galletas() {

	try {

    console.log( Cookies.get('lista'));
    dibujartabla(aArray(Cookies.get('lista')));


	}catch{
    console.log( 'sin Cookies' );

	}


}


function buclecartas(cantidad) {
	for (var i = parseInt(cantidad) - 1; i >= 0; i--) {
		var carta = new card('id'+i,generateName(),getRandomInt(),generateCategorie());

}




function accion() {

		 //Buscador/ filtro categorias
	 $('#buscador').click(function() {
		$('#buscador').click(function() {
			var cat=$(this).val();
			$('.carta').hide();
			$('.card.col-3.col-md-2.carta.'+cat).show();
			

			if (cat=='todo') {
				$('.carta').show();

			}
			

		});	 	
	 });


	 $('.carritoIcone').click(function(event) {
	 	var clase =$(this).parent().parent().attr('id');//Id Div Padre
	 	var img=$('#'+clase).find('img').attr('src');//Link Img
	 	var name=$('#'+clase).find("h4").text();//Nombre
	 	var price=$('#'+clase).find("p").text();//Precio

	 	// console.log('Nombre: '+name+' Precio: '+price+' link:'+img);
	 	try{
	 		//Leer cooki
	 	cartaCompra(img,name,price);


	 	}catch{
	 		Cookies.set('lista',name+','+price+','+img+',')

	 	}

	 });


	 $('.fa-dumpster-fire').click(function(event) {
	 	Cookies.remove('lista');
	 	$('.bodyCart').html('');
	 });

}




function cartaCompra(link, nombre, precio) {
	var array = Cookies.get('lista');

	var insert= [nombre,precio,link];

	$('.bodyCart').html('');
	dibujartabla(aArray(Cookies.get('lista')));

	Cookies.set('lista',array+','+ insert );
	// console.log(Cookies.get('lista'));
	
	// dibujartabla(Cookies.get('lista'));
	

}

function aArray(txt) {
	 var txt= txt.split(",");
	 console.log(txt)
	return txt
}


function dibujartabla(insert){
var insert=insert;

	 for (var i = insert.length - 1; i >= 0; i=i-3) {

		if(insert[i]!=""){
		 	$('.bodyCart').append('<tr>')
		 
		 	$('.bodyCart').append('<td><p>'+insert[i]+'</p></td>');
		 	$('.bodyCart').append('<td><p class="precio">'+insert[i+1]+'</p></td>');
		 	$('.bodyCart').append('<td><a href='+insert[i+2]+'>link</a></td>');
		 	$('.bodyCart').append('</tr>')
		 }
	 }
	

}



/*
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/?api_key=jyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqbW9udGVyb2dAYWVtZXQuZXMiLCJqdGkiOiI3NDRiYmVhMy02NDEyLTQxYWMtYmYzOC01MjhlZWJlM2FhMWEiLCJleHAiOjE0NzUwNTg3ODcsImlzcyI6IkFFTUVUIiwiaWF0IjoxNDc0NjI2Nzg3LCJ1c2VySWQiOiI3NDRiYmVhMy02NDEyLTQxYWMtYmYzOC01MjhlZWJlM2FhMWEiLCJyb2xlIjoiIn0.xh3LstTlsP9h5cxz3TLmYF4uJwhOKzA0B6-vH8lPGGw",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

*/
