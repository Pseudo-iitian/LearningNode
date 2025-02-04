Middleware
- express is a routing and middleware web framework that has minimal functionality of its own
- An express application is essentially a series of middleware function calls.
- Middleware functions are functions that have access to the request object(req), the response object(res), and the next middleware function in the application's request-response cycle. the next middleware function is commonly denoted by a variable named text.

Middleware functions can perform the following tasks.
- execute any code.
- make changes to the request and the response object
- end the request-response cycle.
- call the next middleware function in the stack.

why didn't we can integrated the middlewares and combine it to the main function
- because middleware can be reused for other thing too or other amusement parks too