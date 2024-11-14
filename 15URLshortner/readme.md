URL shortner
1- create a shortened URL, redirecting the user to the previously provided URL.
2- Also, keep track of total visits/clicks on the URL.
3- Routes
    1- POST/URL - Generates a new short URL and returns the shortened URL in the format example.com/random-id.
    2- GET/:id - Redirects the user to ther original URL.
    3- GET/URL/analytics/:id - returns the total clicks for the provided shortened id.


1- npm init
2- npm i nodemon
3- npm i express
4- npm i mongoose
5- npm i ejs - it makes server side rendering easy or templating easy.
