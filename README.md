# Project 1 "Binance"

# Trading Application
Trading application with search functionality to find current data about  Commodities, Stocks and CryptoCurrencies

## Table of Contents

1. [About the Project](#about-the-project)
1. [User Stories](#user-stories)
1. [Development Strategy](#development-strategy)
1. [Demo](#demo)
1. [User Specifications](#user-spfications)
1. [Extra Futures/Spefications](#extra-futures/specifications)
1. [End Result](#end-result)
1. [Getting Started](#getting-started) 
1. [Tech Stack](#tech-stack)
1. [Licence](#licence)

## About The Project

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. This project will include building a Trading website with all the educational information and getting current data and business news. 

## User Stories

```
As an Investor
I want to learn about different trading options, platforms and get current business news and Stocks data.
```

## Development Strategy

* Use the [alphaadvantage API] (https://www.alphavantage.co/api) to retrieve Stocks Data. 
 Use the [stocknews API] (https://stocknewsapi.com/api) to retrieve top 5 business news 
 Use the [quandl API] (https://www.quandl.com/api) to retrieve Commodities Data. 
 Use the [Binance API] (https://api.binance.com/api/) to retrieve Stocks Data. 

* Use AJAX to hook into the API to retrieve data in JSON format.

* App should be able to run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

* Display the following under current Searches:

  * Symbol
  * Date
  * Icon image 
  * Charts
  * Price
  * Exchange
  

* Include a search history so that users can access their past search terms. Clicking on the symbol name should perform a new search that returns results. 


## Demo
![image](https://user-images.githubusercontent.com/66760710/90145685-2f5c7f00-dd4e-11ea-8792-cd7727481d80.png)


## User Specifications

- [x] Fully functional, deployed application.

- [x] GitHub repository with a unique name and a README describing the project.

- [x] User can search for symbols using the different APIs.

- [x] After searching for a symbol, the following information is displayed:
  * Symbol
  * Date
  * Icon image 
  * Charts
  * Price
  * Exchange

- [x] Application uses icons and Charts for selected Symbols

- [x] Application stores previously searched Symbols in localstorage and displays them to the user.





## Getting Started

Go to  https://tjaved12.github.io/Binance/


## Tech Stack

1. Fron-end: Materialize CSS
2. jQuery
3. Ajax
4. APIs
5. Deployed on GitHub Pages





