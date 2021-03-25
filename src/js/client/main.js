import $ from "jquery";

$.getJSON("assets/data/data.json", function(items) {
  for(var item = 0; item < 28; item++) {
      $('#grid').append(
      "<a class='grid-item' href='" + items[item].posterWithLogoImage + "' download>" +
            "<img src='" + items[item].posterWithLogoImage + '?w=800&f=JPG&p=true&q=60' + "' />" +
            "<div class='grid-item-meta-wrapper'>" +
              "<div class='grid-item-series-title'>" + items[item].displayName + "</div>" +
              "<div class='grid-item-network'>" + items[item].channelName + "</div>" +
            "</div>" +
      "</a>");
  }
});

$(window).scroll(function () {
  var end = $('.grid-item:last-child').index();
  var itemPosition = end + 2;
  var itemNext = end + 30;
    if($(window).scrollTop()==($(document).height()-window.innerHeight)){
        $.getJSON("assets/data/data.json", function(items) {
          for(var item = itemPosition; item < itemNext; item++) {
              $('#grid').append(
                "<a class='grid-item' href='" + items[item].posterWithLogoImage + "' download>" +
                  "<img src='" + items[item].posterWithLogoImage + '?w=800&f=JPG&p=true&q=60' + "' />" +
                  "<div class='grid-item-meta-wrapper'>" +
                    "<div class='grid-item-series-title'>" + items[item].displayName + "</div>" +
                    "<div class='grid-item-network'>" + items[item].channelName + "</div>" +
                  "</div>" +
              "</a>");
          }
        });
      }
});

$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  $('#search').keyup(function(){
   $('#grid').html('');
   var searchField = $('#search').val();
   var expression = new RegExp(searchField, "i");
   $.getJSON('assets/data/data.json', function(items) {
     if (searchField === "") {
      for(var item = 0; item < 28; item++) {
        $('#grid').append(
        "<a class='grid-item' href='" + items[item].posterWithLogoImage + "' download>" +
              "<img src='" + items[item].posterWithLogoImage + '?w=800&f=JPG&p=true&q=60' + "' />" +
              "<div class='grid-item-meta-wrapper'>" +
                "<div class='grid-item-series-title'>" + items[item].displayName + "</div>" +
                "<div class='grid-item-network'>" + items[item].channelName + "</div>" +
              "</div>" +
        "</a>");
      }
     } else {
      $.each(items, function(key, item){
        if (item.displayName.search(expression) != -1)
        {
         $('#grid').append(
           "<a class='grid-item' href='" + item.posterWithLogoImage + "' download>" +
               "<img src='" + item.posterWithLogoImage + '?w=800&f=JPG&p=true&q=60' + "' />" +
               "<div class='grid-item-meta-wrapper'>" +
                 "<div class='grid-item-series-title'>" + item.displayName + "</div>" +
                 "<div class='grid-item-network'>" + item.channelName + "</div>" +
               "</div>" +
           "</a>");
        } 
       });
     }   
   });
  });
});
