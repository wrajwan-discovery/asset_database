var path = window.location.pathname.replace(/\/+$/, '');
path = path[0] == '/' ? path.substr(1) : path;
path = path.split('.').slice(0, -1).join('.');
console.log(path);
if (path === "/" || path === "index") {
    $('nav a:first-child').addClass('active');
} else {
    $('#' + path).addClass('active');
}

$('.hamburger').on('click', function () {
    $('body').toggleClass('menu-open'); 
});