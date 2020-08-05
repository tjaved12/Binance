

 //Declaring variables

 $(".stock-tile").hide()
 displayRecentSearchHistory() 
 
 $("#searchBtn").on("click",function(event){
    event.preventDefault();
      console.log("open")
    $(".card-title").empty()
    $(".card-text").empty()
    $(".btn-primary").empty()
    $(".stock-tile").show()

    var symbol=  $("#inputSymbol").val()
    getData(symbol)
 })
 function getData(symbol){
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
    $(".card-title").append(" Symbol: " + (response.bestMatches[0]["1. symbol"]))
    $(".card-text").append(" Company Name: " + (response.bestMatches[0]["2. name"]))
    $(".btn-primary").append(response.bestMatches[0]["1. symbol"])
    
       

})

}
$('#list').on('click', 'li', function(){
  
    console.log('hitt', $(this).text());
    var symbol = $(this).text();
    $(".card-title").empty()
    $(".card-text").empty()
    $(".btn-primary").empty()
    $(".stock-tile").show()
  
   

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
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    // console.log('searchHistory', searchHistory)
    //Declaring variables
    //for loop to add scores in array
    var ulEl = document.getElementById('list');
$("#list").empty()
    searchHistory.push(symbol);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    for (var i = 0; i < searchHistory.length; i++) {
      console.log('searchHistory', searchHistory)
      var liEl = document.createElement('li')
      // console.log('searchHistory', (searchHistory[i]));
      liEl.textContent = (searchHistory[i]).toUpperCase();
      ulEl.append(liEl)
    }
  }
)}
