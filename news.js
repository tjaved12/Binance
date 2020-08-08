function displayNews(){

    var queryURL=' https://stocknewsapi.com/api/v1/category?section=general&items=50&token=4axewg16fegbjlsotq2ezkjzl1utnz8yf1vgblg6'+ '&apikey4axewg16fegbjlsotq2ezkjzl1utnz8yf1vgblg6';
    
    $.ajax({ 
        url: queryURL,
        method: "GET"

    }). then ( function (response ){
        console.log (response)
      console.log (queryURL)
      
for (let i = 0; i < 5; i++) {
  console.log(response.data[i])




  var card = `<div id="newsCard" class="card" style="width: 18rem,">\
                <img src="${response.data[i].image_url}" class="card-img-top">\
                <div class="card-body">\
                  <a href="${response.data[i].url}">${response.data[i].title}</a>\
                  <p class="card-text>${response.data[i].text}</p>\
                  <news src="${response.data[i].news_url}">\
                </div>\
              </div>`

  $("#news").append(card);
}
}
)}





displayNews()