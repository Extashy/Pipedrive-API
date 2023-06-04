# Pipedrive API
## :maple_leaf: What is it?
This is a form for adding new deals with API in user's profile at Pipedrive CRM.
## :maple_leaf: What is used?
+ HTML
+ CSS
+ JS
+ Interaction with the API
## :maple_leaf: Structure
App consists of four files:
+ **File `index.html`**<br>
    This file contains iframe window and button sending the form to the server by API.
+ **File `form.html`**<br>
    This file contains the form of the deal.
+ **File `style.css`**<br>
    Project styles file.
+ **File `script.js`**<br>
    The file with main project logic.<br>
    Here we obtain required elements from DOM.<br>
    Making an object with data from the form input values.<br>
    Adding API key (token) and API URL adress.<br>
    Fetching the server by URL adress and making the POST method providing all the data.<br>
    Getting the response from the server and handling it.
## :maple_leaf: Features
+ You get an alert message 'Deal added', if response from the server is OK.
+ If there is a bad response from the server or any errors, it will be handled and user will get the message 'Something went wrong'.
+ We can add additional deal inputs using Pipedrive CRM documentation, if required.