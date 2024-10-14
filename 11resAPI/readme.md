Rest APIs or Restfull APIs
1- server client architecture
2- client request for something to the server
3- server do some db changes
4- then server sends a response to the client (html docs -> server side rendering), image, text, etc. 
5- but, html docs is good for the browser what about alexa device, there is something different to be sent to alexa so as to process our data.
6- if there any device which wants that it should be json, then send json as response.
7- always respects all http methods GET POST, PUT, delete, patch.
    1- GET/USER - users data read kro and return data
    2- POST/USER - handle new user creation
    3- PATCH/USER - update to existing user

-- but this is not a good practise, it should be patch as patch is already given by http method.
8- POST/updateUser - user update
9- POST/createUser - create
