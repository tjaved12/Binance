//Declaring variables

$("#stock-tile").show()
$("#stock-tile0").show()
$("#stock-tile1").hide()
$("#stock-tile2").hide()
displayRecentSearchHistory() 
recent()
 function recent(){
  var ulEl = document.getElementById('list');
  var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  for (var i = 0; i < searchHistory.length; i++) {
   console.log('searchHistory', searchHistory)
   var liEl = document.createElement('li')
 
   liEl.textContent = (searchHistory[i]).toUpperCase();
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
   $("#hBtn1").empty()
     
   $("#stock-tile1").show()
   $("#stock-tile2").hide()
   
   var symbol=  $("#inputSymbol").val()
   getData(symbol)
   getIcon(symbol)

})
function getData(symbol){
     var queryURL = "https://www.quandl.com/api/v3/datasets/"+symbol+".json?api_key=51-RFYikq27uLnkM6Hdb"

   https://www.quandl.com/api/v3/datasets/JOHNMATT/PALL.json?api_key=51-RFYikq27uLnkM6Hdb
     $.ajax({
       url: queryURL,
       method: "GET"
     })
       // We store all of the retrieved data inside of an object called "response"
       .then(function (response) {
         // Log the queryURL
         console.log(queryURL);
   console.log(response)
   
   $(".card-text2").append(" <p> Description: " + (response.dataset.description)+"</p>")
   $("#companyName").append("<li> Commodity: " + (response.dataset.name)+"</li>")
   $(".card-text1").append("<li> Database code: " + (response.dataset.database_code)+"</li>")
   $(".card-text1").append("<li>Dataset code: " + (response.dataset.dataset_code)+"</li>")
   $(".card-text1").append("<li>Date: " + (response.dataset.data[0][0])+"</li>")
   $(".card-text1").append("<li>US Price AM: " + (response.dataset.data[0][1])+"</li>")
   $(".card-text1").append("<li>US Price PM: " + (response.dataset.data[0][2])+"</li>")
      
   $("#hBtn1").append(response.dataset.name)
  
  
     

 
})
}



$('#list').on('click', 'li', function(){
 
   console.log('hitt', $(this).text());
   var symbol = $(this).text();
    $("#companyName").empty();
   $(".card-title1").empty()
   $(".card-text1").empty()
   $("#hBtn1").empty()
   $(".card-title2").empty()
   $(".card-text2").empty()
 
     
  

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
     ulEl.prepend(liEl)
   }
 }
)}

$("#hBtn1").on('click',function(){
    console.log('gotit', $(this).text());
    var symbol = $(this).text();

    $(".card-title1").empty()
    $(".card-text1").empty()
    $(".card-title2").empty()
    $(".card-text2").empty()
    $("#stock-tile1").hide()
    $("#stock-tile2").show()
   

    console.log(symbol)
    getData(symbol)
    
  })