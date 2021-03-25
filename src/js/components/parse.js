$.getJSON("assets/data/data.json", function(items) {
    for(var item = 0; item < items.length; item++) {
        var gridRow = items[item].location;
        $(gridRow).append(
        "<div class='grid-item'>" +
            "<img src='" + posterWithLogoImage + "' />" +
            "<div class='grid-item-series-title'>" + 
        "</div>");
    }
});

