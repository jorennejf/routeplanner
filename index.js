
$(document).ready(function () {
    console.log('yo!!');
    var source = $("#handlebars-test").html();
    var template = Handlebars.compile(source);

    var data = {
        startpoint: 'UCSD',
        stopover: 'Disneyland',
        endpoint: 'San Francisco'
    }

    console.log(data);
    $("#main").append(template(data));
});