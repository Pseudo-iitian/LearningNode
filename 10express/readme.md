1- Express.JS - is a framework, it creates every thing that you need at the basic level
2- app is an instance of express.
3- Method is an HTTP request method, in lowercase.
4- Path is a path on the server.
5- Handler is the function executed when the route is matched.

NPM versioning
1- npm version is - 10.8.2
    first part - 10
    second part - 8
    third part - 2

2- 3rd part - 2 which denotes minor fixes or changes but optional
3- 2nd part - 8 Recomended bug fixes (security fixes)
4- 1st part - major release current version is 10 and breaking update (should not update it)

NPM installation and removal
1- npm install express
2- npm uninstall express
3- npm i express@4.18.2

^4.21.1 - it means 4 or version ko change nhi kerna hai , but 21 and 1 change ho sqte hai . 
it means you can install [4.21.1 to 5.0.0)

~4.21.1 - it means equivalent to this given version 
update to ~4.21.1, 4.21.2, 4.21.3, but not 4.22.1 (this is not allowed) else code will not work due to different versions

