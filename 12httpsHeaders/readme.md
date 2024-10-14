1- Middle Ware
- it is a function.
- it process every request and response.
- it is responsible to process every requests, and proceed or return back to client as a response.
- execute any code, make chenges to response and requests object, end the request- response cycle, call the next middleware function in the stack.

2- HTTP headers & Status Codes
- For example - A send mail to B.
- the here A is client, B is server, Mail or data packet is is request, it contains data which is Data and extra information on the packets is Headers.
- From: , to: json,
- HTTP Headers are an important part of the API request and response as they represent the meta-data associated with the API request and response. 
- Headers carry information for the request and response body.

3- Status Codes - HTTP response status codes indicate whethere a specific http request has been completed or not .
- 404 not found: 
- informational response - (100, 199)
- successfull response - (200,299)
- redirection message - (300,399);
- client errro responses - (400, 499)
- server error responses - (500,599)

4- why restart the server every time again and again
- 
