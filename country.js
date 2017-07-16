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
        var $container = $("<div>").addClass("container");
        var $flagcont = $("<div>").addClass("flag");
        var $flag = $("<img>").attr({src : item.flag});
        var $namecont = $("<div>").addClass("name");
        var $name = $("<h1>").text(item.name);
        var $capitalcont = $("<div>").addClass("capital");
        var $capitalinfo = $("<strong>").text("Capital:");
        var $capital = $("<p>").text(item.capital);
        var $regioncont = $("<div>").addClass("region");
        var $regioninfo = $("<strong>").text("Region:");
        var $region = $("<p>").text(item.subregion);
        var $phonecont = $("<div>").addClass("phone");
        var $phoneinfo = $("<strong>").text("Phone calling code:");
        var $phone = $("<p>").text("+ " + item.callingCodes);
        var $currencycont = $("<div>").addClass("currency");
        var $currencyinfo = $("<strong>").text("Currency:");
        var $currency = $("<p>").text(item.currencies[0].code);
        var $populationcont = $("<div>").addClass("population");
        var $populationinfo = $("<strong>").text("Population:");
        var $population = $("<p>").text(item.population);
        var $domaincont = $("<div>").addClass("domain");
        var $domaininfo = $("<strong>").text("Domain:");
        var $domain = $("<p>").text(item.topLevelDomain[0]);
        $flagcont.append($flag).appendTo($container);
        $namecont.append($name).appendTo($container);
        $capitalcont.append($capitalinfo).append($capital).appendTo($container);
        $regioncont.append($regioninfo).append($region).appendTo($container);
        $phonecont.append($phoneinfo).append($phone).appendTo($container);
        $currencycont.append($currencyinfo).append($currency).appendTo($container);
        $populationcont.append($populationinfo).append($population).appendTo($container);
        $domaincont.append($domaininfo).append($domain).appendTo($container);
        $("<li>").append($container).appendTo(countriesList);
        // $("<li>").append($name).appendTo(countriesList);
        // $("<li>").append($capital).appendTo(countriesList);
        // $("<li>").append($phone).appendTo(countriesList);
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