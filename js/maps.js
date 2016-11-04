require('handlebars');

var data = require('data.json');

var jsonData = $.parseJSON(data);

var $select = $('#start');
$(jsonData).each(function (index, o) {    
    var $option = $("<option/>").attr("value", o.label).text(o.value);
    $select.append($option);
});

/*    url:'maps.html',
    type:'POST',
    data: 'q=' + str,
    dataType: 'json',
    success: function( json ) {
        $.each(json, function(i, value) {
            $('#start').append($('<option>').text(value).attr('value', value));
        });
    }
});*/

/*$.getJSON( "data.json", function( data )
 {
   $.each(data, function(index, item)
   {
     $('#service').append($("<option>" + item.SERVICE + "</option>"));
   });
 });

$('<option>').
  attr('value', item.SERVICE).
  text(item.SERVICE).
  appendTo($('#service'));*/

/*var $select = $('#start');
$.each(data, function(i, val){
    $select.append($('<option />', { value: (i+1), text: val[i+1] }));
});*/

/* $.getJSON("data.json", function(json){
            $('#start').empty();
            $('#start').append($('<option>').text("Select"));
            $.each(json, function(i, obj){
                    $('#start').append($('<option>').text(obj.text).attr('value', obj.val));
            });
    });*/

   /* useTemplate = function(template, data) {
    var i = 0,
        len = data.length,
        html = 'maps.html';
    // Replace the {% raw %}{{XXX}}{% endraw %} with the corresponding property
    function replaceWithData(data_bit) {
        var html_snippet, prop, regex;
        for (prop in data_bit) {
            regex = new RegExp({value}'{{' + prop + '}}'{label}, 'ig');
            html_snippet = (html_snippet || template).replace(regex, data_bit[key]);
        }
        return html_snippet;
    }
    // Go through each element in the array and add the properties to the template
    for (; i < len; i++) {
        html += replaceWithData(data[i]);
    }
    // Give back the HTML to be added to the DOM
    return html;
};*/