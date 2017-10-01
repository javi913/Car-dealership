//Function to first hide Search button, then to toggle show/hide search button


$(function() {
    $('#myInput1').hide();
});

$('#showsearch').toggle(function() {
    $('#showsearch').text('Cancel')
}, function() {
    $('#showsearch').text('Search Inventory')
});

$('#showsearch').click(function() {
    $('#myInput1').toggle();

});
//End of function for toggle search button

//Function to first hide Inventory, then to toggle show/hide Inventory

$(function() {
    $("#inventory1").hide();
});



$("#showcars").toggle(function() {
    $('#showcars').text('Hide Inventory');
}, function() {
    $('#showcars').text('Show Inventory')
});

$('#showcars').click(function() {
    $('#inventory1').toggle();
});
//End of function for toggle Inventory

//function for taxes


$(function() {
    $("#total1").hide();
});

$("#taxes").toggle(function() {
    $("#taxes").text("Without Taxes");
    $("#total1").show();
    $("#subt").hide();
}, function() {
    $("#taxes").text("With Taxes")
    $("#total1").hide();
    $("#subt").show();
});




$("#contactbtn").click(function() {
    console.log("#contactform");
});
