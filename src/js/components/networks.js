// const dir = 'https://ddp.t.dsc.tv/Asset_Database/assets/img/logos/grayscale/';
// const fileextension = ".png";
// $.ajax({
//     type: 'GET',
//     url: dir,
//     success: function (data) {
//         //List all .png file names in the page

//         $(data).find("a:contains(" + fileextension + ")").each(function () {
//             var filename = this.href.replace(window.location.host, "").replace("http://", "");
//             console.log(filename);
//             $('#grid').append(
//                 "<a class='grid-item logo' href='" + items[item].logoImage + "' target='_blank' download>" +
//                       "<img src='" + dir + filename + "'>" +
//                       "<div class='grid-item-meta-wrapper'>" +
//                         "<div class='grid-item-series-title'>" + items[item].ChannelName + "</div>" +
//                       "</div>" +
//                 "</a>");
//         });
//     },
//     error: function () {
//         alert('error');
//     }
// });
