$(document).ready(function () {
    console.log('Document is ready');

    var $titles = $('.card-title');

    $titles.css('color', 'green').text('Sweet cat');

    $('.container').on("click", ".card .btn", function (event) {
        event.preventDefault();

        $(this).parent().parent().parent().remove();

       console.log('Click! :)');
    });

    $('#add').on("click", function () {
       var $col = $('<div class="col">\
       <div class="card">\
        <img class="card-img-top" src="https://www.libriomeopatia.it/data/blog/thumb/c/ci-manca-solo-che-porto-il-gatto-dallo-psicologo_1296.jpg" alt="Card image cap">\
        <div class="card-body">\
        <h5 class="card-title">Card title</h5>\
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\
        <a href="#" class="btn btn-primary">Go somewhere</a>\
        </div>\
        </div>\
        </div>');

        $('.row').append($col);
    });
});