//Declaring variables
 $("#stock-tile").show()
 $("#stock-tile0").show()
 $("#stock-tile1").hide()
 $("#stock-tile2").hide()
 $("#hBtn2").hide()
 displayRecentSearchHistory() 
 recent()
 function recent(){
  var ulEl = document.getElementById('list');
  var searchHistoryStocks = JSON.parse(localStorage.getItem('searchHistoryStocks')) || [];

  for (var i = 0; i < searchHistoryStocks.length; i++) {
   console.log('searchHistory', searchHistoryStocks)
   var liEl = document.createElement('li')
   // console.log('searchHistory', (searchHistory[i]));
   liEl.textContent = (searchHistoryStocks[i]).toUpperCase();
   ulEl.prepend(liEl)
 }
 }
 
 $("#searchBtn").on("click",function(event){

    event.preventDefault();
      console.log("open")
      $("#stock-tile").hide()
      $("#stock-tile0").hide()
      $("#companyName").empty()
    $(".card-title1").empty()
    $(".card-text1").empty()
    $("#hBtn1").empty()
      $(".card-title2").empty()
    $(".card-text2").empty()
    $("#hBtn2").empty()
    $("#stock-tile1").show()
    $("#stock-tile2").hide()
    $("#hBtn2").hide()

    
    var symbol=  $("#inputSymbol").val()
    getData(symbol)
    getIcon(symbol)

 })
 function getData(symbol){
      var queryURL = "https://www.alphavantage.co/query?function=OVERVIEW&symbol="+symbol+"&apikey=03SVGJ9SZRBGVOUS"
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
          // Log the queryURL
          console.log(queryURL);
    console.log(response)
    $(".card-title1").append(" Symbol: " + (response.Symbol))
    $("#companyName").append("<li>" + (response.Name) + "</li>")
    $(".card-text1").append(" <li>Exchange: " + (response.Exchange)+"</li>")
    $(".card-text1").append("<li> Sector: " + (response.Sector)+"</li>")
    $(".card-text1").append("<li> Industry: " + (response.Industry)+"</li>")
    $(".card-text1").append("<li> DividendPerShare: " + (response.DividendPerShare)+"</li>")
    $(".card-text1").append("<li> 52 Week High: " + (response['52WeekHigh'])+"</li>")
    $(".card-text1").append("<li> 52 Week Low: " + (response['52WeekLow'])+"</li>")

    $(".card-text1").append("<li> AnalystTargetPrice: " + (response.AnalystTargetPrice)+"</li>")
    $("#hBtn1").append(response.Symbol)
    
    $(".card-title2").append(" Symbol Details: " + (response.Symbol))
    $(".card-text2").append("<li> Company Description: " + (response.Description)+"</li><br>")
    $(".card-text2").append(" <li>Currency: " + (response.Currency)+"</li><br>")
    $(".card-text2").append("<li> Country: " + (response.Country)+"</li>")

})
}

function getIcon(symbol){
    var iconURL = "https://api.serpwow.com/live/search?api_key=5B001D6BC2A344FFB89CC51E65451763&q="+symbol+"+official+logo&search_type=images&images_size=icon"
     $.ajax({
            url: iconURL,
            method: "GET"
          })
            // We store all of the retrieved data inside of an object called "response"
            .then(function (response2) {
            console.log(response2)
            $("img").attr("src", response2.image_results[0].image)
        }

)
}
$('#list').on('click', 'li', function(){
  
    console.log('hitt', $(this).text());
    var symbol = $(this).text();
    $("#companyName").empty()
    $(".card-title1").empty()
    $(".card-text1").empty()
    $("#hBtn1").empty()
    $(".card-title2").empty()
    $(".card-text2").empty()
    // $("#hBtn2").empty()
    $("#stock-tile0").hide()
    $("#stock-tile").hide()
    $("#stock-tile1").show()
    $("#stock-tile2").hide()
    $("#hBtn2").hide()


    console.log(symbol)
    getData(symbol)
    
  
  })

  $("#hBtn1").on('click',function(){
    console.log('gotit', $(this).text());
    var symbol = $(this).text();
    
    $("#stock-tile0").hide()
    $("#stock-tile").hide()
    $("#stock-tile1").hide()
    $("#stock-tile2").show()
    $(".card-title1").empty()
    $(".card-text1").empty()
    $(".card-title2").empty()
    $(".card-text2").empty()
    $("#hBtn2").show()
    $("#hBtn2").html(symbol.toUpperCase()+" Live Chart")

   

    console.log(symbol)
    getData(symbol)
    
  })
  function displayRecentSearchHistory() {
    $("#searchBtn").on("click",function(event){
      event.preventDefault();
    var symbol= $("#inputSymbol").val()
    console.log(symbol)
    //saving the symbol na
    //Using parse to change the string into parse
    
    var searchHistoryStocks = JSON.parse(localStorage.getItem('searchHistoryStocks')) || [];
    // console.log('searchHistory', searchHistory)
    //Declaring variables
    //for loop to add scores in array
    var ulEl = document.getElementById('list');
$("#list").empty()
    searchHistoryStocks.push(symbol);
    localStorage.setItem("searchHistoryStocks", JSON.stringify(searchHistoryStocks));
    var searchHistoryStocks = JSON.parse(localStorage.getItem('searchHistoryStocks')) || [];
    for (var i = 0; i < searchHistoryStocks.length; i++) {
      console.log('searchHistory', searchHistoryStocks)
      var liEl = document.createElement('li')
      // console.log('searchHistory', (searchHistory[i]));
      liEl.textContent = (searchHistoryStocks[i]).toUpperCase();
      ulEl.prepend(liEl)
    }
  }
    )}
 
    $("#hBtn2").on("click", function(){
      var symbol=  $("#inputSymbol").val()
      console.log(symbol)
$("#hBtn2").attr("href", "https://www.tradingview.com/chart/" +symbol)
    })