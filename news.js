function displayNews(){

    var queryURL=' https://stocknewsapi.com/api/v1/category?section=general&items=50&token=4axewg16fegbjlsotq2ezkjzl1utnz8yf1vgblg6'+ '&apikey4axewg16fegbjlsotq2ezkjzl1utnz8yf1vgblg6';
    
    $.ajax({ 
        url: queryURL,
        method: "GET"

    }). then ( function (response ){
        console.log (response)
      console.log (queryURL)
      
for (let i = 0; i < 6; i++) {
  console.log(response.data[i])




  var card = `<div class="col s12 m7">\
  <div class="card horizontal">\
    <div class="image_url">\
      <img src="${response.data[i].image_url}">\
    </div>\
    <div class="news_url">\
    <news src="${response.data[i].news_url}">\
  </div>\
  <div class="source_name">\
    <a src="${response.data[i].source_name}">\
  </div>\
  
    <div class="card-stacked">\
      <div class="card-content">\
        <p>${response.data[i].text}</p>\
      </div>\
      <div class="card-action">\
        <a href="${response.data[i].url}">${response.data[i].title}</a>\
      </div>\
    </div>\
  </div>\
</div>`

  $("#news").append(card);
}
}
)}





displayNews()