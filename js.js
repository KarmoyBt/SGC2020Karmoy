

$( document ).ready(function() {

	buclecartas(54);
	
	// console.log(carta1);
	// galletas();
	// console.log(Cookies.get());
    console.log( "document ready" );
    accion();
});



function galletas() {

	var fingerprint = new Fingerprint().get();
	if(Cookies.get('hash')!=''){
	Cookies.set('hash',fingerprint);
	}
	 console.log(fingerprint);
}


function buclecartas(cantidad) {
	for (var i = parseInt(cantidad) - 1; i >= 0; i--) {
		var carta = new card('id'+i,generateName(),getRandomInt(),generateCategorie());
		// var carta+i = new card(i,generateName(),getRandomInt());

	}
	// var carta1 = new card(1,generateName(),getRandomInt(),generateCategorie());
	// var carta2 = new card(2,generateName(),getRandomInt(),generateCategorie());

}




function accion() {

		 //Buscador/ filtro categorias
	 $('#buscador').click(function() {
		$('#buscador').click(function() {
			var cat=$(this).val();
			// console.log(a);
			$('.carta').hide();
			$('.card.col-2.carta.'+cat).show();

			if (cat=='todo') {
				$('.carta').show();

			}
			

		});	 	
	 });


	 $('.glyphicon').click(function(event) {
	 	var clase =$(this).parent().parent().attr('id');//Id Div Padre
	 	var img=$('#'+clase).find('img').attr('src');//Link Img
	 	var name=$('#'+clase).find("h4").text();//Nombre
	 	var price=$('#'+clase).find("p").text();//Precio

	 	console.log('Nombre: '+name+' Precio: '+price+' link:'+img);

	 	cartaCompra(img,name,price);

	 });


	 $('a').hover(function() {
	 	
	 }, function() {
	 	var link = $(this).attr('href');
	 	$(this).css('background-image:', 'url('+link+')');
	 	console.log('hover');
	 	/* Stuff to do when the mouse leaves the element */
	 });



}




function cartaCompra(link, nombre, precio) {
	var array= Cookies.get('lista');

	var insert= [nombre,precio,link];

	Cookies.set('lista',insert);
	// console.log(Cookies.get('lista'));

	dibujartabla(insert);

}

function dibujartabla(insert){

	$('.bodyCart').append('<tr>')
	 // for (var i = insert.length - 1; i >= 0; i--) {
	 	
	 	
			// insert[0] nombre
			// insert[1] precio
			// insert[2] link
			// console.log(insert[i]);
	 
	 	$('.bodyCart').append('<td><p>'+insert[0]+'</p></td>');
	 	$('.bodyCart').append('<td><p>'+insert[1]+'</p></td>');
	 	$('.bodyCart').append('<td><a href='+insert[2]+'>link</a></td>');
	 // }
	$('.bodyCart').append('</tr>')

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
