$(".my-sm-0").on("click",function(event){
    event.preventDefault();
     $("#symbolInfo").empty()
    console.log("open")

    var symbol=  $("#inputSymbol").val()
      var queryURL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords="+symbol+"&apikey=03SVGJ9SZRBGVOUS"
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
          // Log the queryURL
          console.log(queryURL);
    console.log(response)
    $("#symbolInfo").append("<p> Symbol: " + (response.bestMatches[0]["1. symbol"]+ "</p>"))

    $("#symbolInfo").append("<p> Company Name: " + (response.bestMatches[0]["2. name"]+ "</p>"))
    
    
})
})
