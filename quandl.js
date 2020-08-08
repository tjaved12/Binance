//Declaring variables

$("#stock-tile1").hide()
$("#stock-tile2").hide()

displayRecentSearchHistory() 


$("#searchBtn").on("click",function(event){
   event.preventDefault();
     console.log("open")
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
   $(".card-title1").append(" Commodity: " + (response.dataset.name))
   $(".card-text1").append("<li> Database code: " + (response.dataset.database_code)+"</li>")
   $(".card-text1").append("<li>Dataset code: " + (response.dataset.dataset_code)+"</li>")
   $(".card-text1").append("<li>Date: " + (response.dataset.data[0][0])+"</li>")
   $(".card-text1").append("<li>US Price AM: " + (response.dataset.data[0][1])+"</li>")
   $(".card-text1").append("<li>US Price PM: " + (response.dataset.data[0][2])+"</li>")
      
   $("#hBtn1").append(response.dataset.name)
    $(".card-title2").append(" Commodity: " + (response.dataset.name))
  
     

 
})
}

//function getIcon(symbol){
   //var iconURL = "https://api.serpwow.com/live/search?api_key=5B001D6BC2A344FFB89CC51E65451763&q="+symbol+"+official+logo&search_type=images&images_size=icon"
   // $.ajax({
      //     url: iconURL,
      //     method: "GET"
       //  })
           // We store all of the retrieved data inside of an object called "response"
       //    .then(function (response2) {
       //    console.log(response2)
     //      $("img").attr("src", response2.image_results[0].image)
     //  }

//)
//}
$('#list').on('click', 'li', function(){
 
   console.log('hitt', $(this).text());
   var symbol = $(this).text();
   $(".card-title1").empty()
   $(".card-text1").empty()
   $("#hBtn1").empty()
   $(".card-title2").empty()
   $(".card-text2").empty()
 
      $("#list").empty()
  

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