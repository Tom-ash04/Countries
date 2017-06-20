var url = "https://restcountries.eu/rest/v2/name/";
var countriesList = $("#countries");

$("#search").click(searchCountries);

function searchCountries(){
    var countryName = $("#country-name").val();
    if(!countryName.length) countryName = "Poland";
    $.ajax({
        url: url + countryName,
        method: "GET",
        success: showCountriesList,
    });
}

function showCountriesList(resp){
    countriesList.empty();
    resp.forEach(function(item){
        var $text = $("<p>").text(item.name + " , Capital: " + item.capital + " , Region: " + item.subregion);
        var $flag = $("<img>").attr({src : item.flag});
        $("<li>").append($flag).append($text).appendTo(countriesList);
    });
}

// function searchCountries(){                                                                      //VANILLA JS
//     var countryName = document.getElementById("country-name").value;
//     if(!countryName.length) countryName = "Poland";
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url + countryName);
//     xhr.addEventListener("load", function(){
//         var response = JSON.parse(xhr.response);
//         for (i = 0; i < response.length; i ++){
//             var p = document.createElement("p");
//             var txt = document.createTextNode(response[i].name + " , Capital " + response[i].capital);
//             p.appendChild(txt);
//             document.getElementById("countries").appendChild(p);
//         };
//     });
//     xhr.send();
// }