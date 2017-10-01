//Function for Search

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, text;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    text = "No Results Found";

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            li[i].style.display = document.getElementById("error").innerHTML = " ";
        }
        else {
            li[i].style.display = "none";
            li[i].style.display = document.getElementById("error").innerHTML = text;
        }
    }
}

//End of function for search
