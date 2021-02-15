// api key e5d8f0f34fc44dc7a9c14e8e91146693

function displayNews(){
    var queryURL='https://gnews.io/api/v4/top-headlines?token=6429df439c625744669b8f7c56a751ff';
    $.ajax({ 
        url: queryURL,
        method: "GET"
    }).then(function(response){
      console.log("queryURL = " + queryURL)
      for (let i = 0; i < 5; i++) {
        console.log(response)
        console.log(response.articles[0].title)

        var card = `<div id="newsCard" class="card" style="width: 18rem,">\
                      <img src="${response.articles[i].image}" class="card-img-top">\
                      <div class="card-body">\
                        <a href="${response.articles[i].url}" target="_blank">${response.articles[i].title}</a>\
                        <p class="card-text>${response.articles[i].text}</p>\
                        <news src="${response.articles[i].source.name}">\
                      </div>\
                    </div>`
        $("#news").append(card);
      }
    }
)}

displayNews()