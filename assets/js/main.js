$(document).ready(function(){

    var quantitiy=1;
       $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 0);
    
              
                // Increment
            
        });
    
         $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
          
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 0);
                }
        });
    });


    function initMap() {
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer({map: map, 
     suppressPolylines: true}); // Added supress polylines and markers
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 59.18568, lng: 24.41399}
        });
        
        directionsRenderer.setMap(map);

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsRenderer);
        };
        document.getElementById('destination-input').addEventListener('change', onChangeHandler);
        document.getElementById('next-btn').addEventListener('click', onChangeHandler);
        document.getElementById('a-next-btn').addEventListener('click', onChangeHandler); //lisa 05.04
        document.getElementById('quantity').addEventListener('change', onChangeHandler);
        
        initAutocomplete(); // initiate Auto complete instance
        var placeSearch, autocomplete;
    
        function initAutocomplete() {
          // Create the autocomplete object, restricting the search predictions to
          // geographical location types.
          autocomplete = new google.maps.places.Autocomplete(
              document.getElementById('destination-input'), {
              types: ['geocode']});
        
          // Avoid paying for data that you don't need by restricting the set of
          // place fields that are returned to just the address components.
          autocomplete.setFields(['address_component']);
        
          // When the user selects an address from the drop-down, populate the
          // address fields in the form.
          autocomplete.addListener('place_changed', fillInAddress);
          
        }
      }
      

      function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        directionsService.route(
            {
              origin: '75509 Harju County Tammemäe estonia',
              destination: document.getElementById('destination-input').value,
              travelMode: 'DRIVING'
            },
            function(response, status) {                
                var materjal = document.querySelector('input[name = material]:checked').value;
                var quantity = document.getElementById('quantity').value;
                var parsedMaterjal = parseInt(document.querySelector('input[name = material]:checked').value);
                var parsedQuantity = parseInt(document.getElementById('quantity').value);
                var alla50km = 50;
                var price = parsedMaterjal * parsedQuantity;
                var priceAlla50km = Number(price) + Number(alla50km)  * document.getElementById('msg5').value + price;
                var customerType = document.querySelector('input[name = customertype]:checked').value;
                var companyUnder50km = function () {
                  if (customerType == "1") {
                    document.getElementById('msg2').innerHTML = " KM: " + priceAlla50km * 0.2 + " € " + " </br> " + " price + KM: " + priceAlla50km * 1.2 + " € ";
                  }
                  else {
                    return;
                  }
                }
                var company = function () {
                  if (customerType == "1") {
                    document.getElementById('msg2').innerHTML = " KM: " + price * 0.2 + " € " + " </br> " + " price + KM: " + price * 1.2 + " € ";
                  }
                  else {
                    return;
                  }
                }
                
              if (status === 'OK') {
                directionsRenderer.setDirections(response);
                var directionsData = response.routes[0].legs[0]; // Get data about the mapped route 
                if (!directionsData) {
                  window.alert('Directions request failed');
                return;
              }
              var distantsprice = Math.round(directionsData.distance.value / 1000) * 1.5 * document.getElementById('msg5').value + price;
              if ( Math.round(directionsData.distance.value / 1000) > 100 ) {
                document.getElementById('a-next-btn').style.visibility = 'hidden',
                document.getElementById('msg4').classList.add("alert-danger"),
                document.getElementById('msg4').classList.add("alert"),
                document.getElementById('msg4').innerHTML = " Tellimus asub väljaspool tarnepiirkonda. Vajaduse korral võta meiega ühendust! ";
              }
              else if ( Math.round(directionsData.distance.value / 1000) < 36 ) {
                document.getElementById('msg').innerHTML = "price: " + Math.round(priceAlla50km * customerType ) + "€", 
                document.getElementById('a-next-btn').style.visibility = 'visible',
                document.getElementById('msg4').innerHTML = " ",
                document.getElementById('msg4').classList.remove("alert-danger"),
                document.getElementById('msg4').classList.remove("alert"),
                document.getElementById('msg2').innerHTML = " price + KM: " + Math.round(priceAlla50km * 1.2) + " € " + " </br> " + " KM: " + Math.round(priceAlla50km * 0.2) + " € ";
              }
              else {
                document.getElementById('msg').innerHTML = "price: " + Math.round(distantsprice * customerType) + "€" ,
                document.getElementById('a-next-btn').style.visibility = 'visible',
                document.getElementById('msg4').innerHTML = " ",
                document.getElementById('msg4').classList.remove("alert-danger"),
                document.getElementById('msg4').classList.remove("alert"),
                document.getElementById('msg2').innerHTML = " price + KM: " + Math.round(distantsprice * 1.2) + " € "  + " </br> " + " KM: " + Math.round(distantsprice * 0.2) + " € ";
               }
               console.log(price, Math.round(directionsData.distance.value / 1000), distantsprice)
              } 
            });
      }

     function decrease() {
        //lisa 06.04

        var quantity = parseInt( document.getElementById("quantity").value );
        var parsedVeok = parseInt(document.querySelector('input[name = veok]:checked').value);
        var koormad = Math.ceil(quantity / parsedVeok);
        
        if( document.getElementById("quantity").value <= 1 ){
            document.getElementById("quantity").value = parseInt( document.getElementById("quantity").value ) - 0,
            document.getElementById('msg5').value = Math.ceil(parseInt( document.getElementById("quantity").value ) / parsedVeok);
        }
        else {
            document.getElementById("quantity").value = parseInt( document.getElementById("quantity").value ) - 5,
            document.getElementById('msg5').value = Math.ceil(parseInt( document.getElementById("quantity").value ) / parsedVeok);
        }
    }

    function encrease() {
      //lisa 06.04

      var quantity = parseInt( document.getElementById("quantity").value );
      var parsedVeok = parseInt(document.querySelector('input[name = veok]:checked').value);
      var koormad = Math.ceil(quantity / parsedVeok);
        if( document.getElementById("quantity").value == 1 ){
            document.getElementById("quantity").value = parseInt( document.getElementById("quantity").value ) + 4,
            document.getElementById('msg5').value = Math.ceil(parseInt( document.getElementById("quantity").value ) / parsedVeok);
        }
        else {
        document.getElementById("quantity").value = parseInt( document.getElementById("quantity").value ) + 5,
        document.getElementById('msg5').value = Math.ceil(parseInt( document.getElementById("quantity").value ) / parsedVeok);
        }
    }


function kinnitamine() {
  if ( (document.querySelector('input[name = customertype]:checked').value) == "1.2" ) {
    document.getElementById('company-name').style.visibility = "hidden",
    document.getElementById('co-name-tag').style.visibility = "hidden",
    document.getElementById('msg3').style.visibility = "visible",
    document.getElementById('msg2').style.visibility = "hidden";
  }
  if ( (document.querySelector('input[name = customertype]:checked').value) == "1" ) {
    document.getElementById('company-name').style.visibility = "visible",
    document.getElementById('co-name-tag').style.visibility = "visible",
    document.getElementById('msg3').style.visibility = "hidden",
    document.getElementById('msg2').style.visibility = "visible";
  }
  var quantity = document.getElementById('quantity').value;
  let customer = $('input[name="customertype"]:checked').parent().text();
  let valitud_material = $('input[name="material"]:checked').parent().text();
  var time = $('input[name="time"]:checked').parent().text();
  let kokkulepitudprice = document.getElementById('msg').innerHTML;
  let kokkulepitudprice2 = document.getElementById('msg2').innerHTML;
  var tarne = document.getElementById('destination-input').value;
  let valitud_adress_info = document.getElementById('lisainfo').value;
  let kpv = $("#datepicker").data("datepicker").getDate();

  
  document.getElementById('valitud_material').value = valitud_material;
  document.getElementById('valitud_adress').value = tarne;
  document.getElementById('client').value = customer;
  document.getElementById('valitud_qnt').value = quantity;
  document.getElementById('chosen_date').value = kpv;
  document.getElementById('valitud_time').value = time;
  document.getElementById('lprice').value = kokkulepitudprice;
  document.getElementById('lprice2').value = kokkulepitudprice2;
  document.getElementById('valitud_adress_lisainfo').value = valitud_adress_info;

}


$('#next-btn').click(function(){
  if (!$("input[name='material']:checked").val()) {
    $("#alert-material").hide().slideDown(400).removeClass('hide')
    event.stopPropagation();
      return false;
  }
  if($('#destination-input').val() == ''){
    $("#alert-asukoht").hide().slideDown(400).removeClass('hide')
  }
  else {
    return;
  }
})

$('#next-btn').click(function(){
  if (!$("input[name='customertype']:checked").val()) {
    $("#alert-customertype").hide().slideDown(400).removeClass('hide')
    event.stopPropagation();
      return false;
  }
  else {
    return;
  }
})

$('.collapse').on('shown.bs.collapse', function(e) {
  var $card = $(this).closest('.card');
  $('html,body').animate({
    scrollTop: $card.offset().top
  }, 500);
});



$('#date-btn').click(function(){
  if (!$("input[name='time']:checked").val()) {
    $("#alert-time").hide().slideDown(400).removeClass('hide')
    event.stopPropagation();
      return false;
  }
  else {
    return;
  }
})


$('#a-next-btn').click(function(){
  if($('#destination-input').val() == ''){
    $("#alert-asukoht").hide().slideDown(400).removeClass('hide')
    event.stopPropagation();
    return false
  }
  else {
    return;
  }
});

$('#date-btn').click(function(){
  
var date = $("#datepicker").datepicker('getDate');
  if(!$(date).val()){
    $("#alert-date").hide().slideDown(400).removeClass('hide')
    event.stopPropagation();
    return false
  }
  else {
    return;
  }
});

$('#kinnitus-btn').click(function(){
  if (!$("input[name='kinnitus']:checked").val()) {
    $("#alert-kinnitus").hide().slideDown(400).removeClass('hide')
    event.stopPropagation();
      return false;
  }
  else {
    return;
  }
})

var qnt = $('#quantity').val();
var veok = $("input[name='veok']").val();
var kArv = $(qnt) / $(veok);
$("input[name='veok']").on("change", function () {
   $('#msg5').val( Math.ceil($('#quantity').val() / this.value));
});
