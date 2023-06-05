$.getJSON("assets/data/data.json", function(items) {
    for(var item = 0; item < 28; item++) {
      if (items[item].defaultImage.length > 0) {
        $('#grid').append(
        "<a class='grid-item show' href='" + items[item].defaultImage + "' target='_blank' download>" +
              "<img src='" + items[item].defaultImage + '?w=800&f=JPG&p=true&q=60' + "' />" +
              "<div class='grid-item-meta-wrapper'>" +
                "<div class='grid-item-series-title'>" + items[item].name + "</div>" +
                "<div class='grid-item-network'>" + items[item].channelName + "</div>" +
                "<div class='grid-item-id'>" + items[item].internalId + "</div>" +
              "</div>" +
        "</a>");
      } else {
        $('#grid').append(
          "<div class='grid-item' style='display: none'></div>"
        );
      }
    }
  });
  
  $(window).scroll(function () {
    var end = $('.grid-item:last-child').index();
    var itemPosition = end + 2;
    var itemNext = end + 30;
    const searchField = $('#search').val();
    if (searchField === "") {
        if($(window).scrollTop()==($(document).height()-window.innerHeight)){
            $.getJSON("assets/data/data.json", function(items) {
              for(var item = itemPosition; item < itemNext; item++) {
                if (items[item].defaultImage.length > 0) {
                  $('#grid').append(
                    "<a class='grid-item show' href='" + items[item].defaultImage + "' target='_blank' download>" +
                      "<img src='" + items[item].defaultImage + '?w=800&f=JPG&p=true&q=60' + "' />" +
                      "<div class='grid-item-meta-wrapper'>" +
                        "<div class='grid-item-series-title'>" + items[item].name + "</div>" +
                        "<div class='grid-item-network'>" + items[item].channelName + "</div>" +
                        "<div class='grid-item-id'>" + items[item].internalId + "</div>" +
                      "</div>" +
                  "</a>");
                } else {
                  $('#grid').append(
                    "<div class='grid-item' style='display: none'></div>"
                  );
                }
              }
            });
          } else {}
        } else {
          
        }
  });
  
  function delay(callback, ms) {
    var timer = 0;
    return function() {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, ms || 0);
    };
  }
  
  $.ajaxSetup({ cache: false });
  $('#search').keyup(delay(function() {
    $('#grid').empty();
      $('#grid').html('');
      const searchField = $('#search').val();
      var expression = new RegExp(searchField, "i");
      $.getJSON('assets/data/data.json', function(items) {
        if (searchField === "") {
        for(var item = 0; item < 28; item++) {
          if (items[item].defaultImage.length > 0) {
            $('#grid').append(
            "<a class='grid-item show' href='" + items[item].defaultImage + "' target='_blank' download>" +
                  "<img src='" + items[item].defaultImage + '?w=800&f=JPG&p=true&q=60' + "' />" +
                  "<div class='grid-item-meta-wrapper'>" +
                    "<div class='grid-item-series-title'>" + items[item].name + "</div>" +
                    "<div class='grid-item-network'>" + items[item].channelName + "</div>" +
                    "<div class='grid-item-id'>" + items[item].internalId + "</div>" +
                  "</div>" +
            "</a>");
            } else {
              $('#grid').append(
                "<div class='grid-item' style='display: none'></div>"
              );
            }
          }
        } else {
  
            $.each(items, function(key, item){
            if (item.name.search(expression) != -1) {
              if (item.defaultImage.length > 0) {
                  $('#grid').append(
                    "<a class='grid-item show' href='" + item.defaultImage + "' target='_blank' download>" +
                        "<img src='" + item.defaultImage + '?w=800&f=JPG&p=true&q=60' + "' />" +
                        "<div class='grid-item-meta-wrapper'>" +
                          "<div class='grid-item-series-title'>" + item.name + "</div>" +
                          "<div class='grid-item-network'>" + item.channelName + "</div>" +
                          "<div class='grid-item-id'>" + item.internalId + "</div>" +
                        "</div>" +
                    "</a>");
                  } else {
                    $('#grid').append(
                      "<div class='grid-item' style='display: none'></div>"
                    );
                  }
                } 
          });
        }   
      });
  }, 200));