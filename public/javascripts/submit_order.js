// Hayden Liao

function submitOrder(){
  var order_details = document.getElementById("textarea_order_details").value;
  var is_vegan = order_details.search("vegan") != -1;
  if(is_vegan){
    alert("Warning: Cheesecake contains dairy.");
  } else {
    var topping_value = $("input[name='topping']:checked").val();
    var quantity_value = quantity.value;
      $(".order_form").hide();
      $("#successful_order_message").html("<b>Thank you!  Your order has been placed.</b><br>");
      $("#order_details").append(quantity_value + " " + topping_value + " cheesecake");
      if(quantity_value != "1"){
        $("#order_details").append("s");
      }
      $("#order_details").append("<br>Notes: " + order_details + "<br>");
      $("#order_details").css({"font-weight": "bold"});
  }
}
