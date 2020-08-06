$('#news').card


function displayNews() {

    var queryURL = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&category=business&pageSize=5&' + 'apiKey=3a74e106dcba4291b653474e5c385cf0';
        console.log(displayNews)
    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function (response) {

        for (var i = 0; i < response.articles.length; i++) {

            var card = `<div class="col s12 m7">\
            <div class="card horizontal">\
              <div class="card-image">\
                <img src="${response.articles[i].urlToImage}">\
              </div>\
              <div class="card-stacked">\
                <div class="card-content">\
                  <p>${response.articles[i].description}</p>\
                </div>\
                <div class="card-action">\
                  <a href="${response.articles[i].url}">${response.articles[i].title}</a>\
                </div>\
              </div>\
            </div>\
          </div>`

            $("#news").append(card);
        }
    }
    )}

displayNews()
// https://newsapi.org/v2/top-headlines?country=us&apiKey=3a74e106dcba4291b653474e5c385cf0