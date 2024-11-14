Mongo DB
1- NO- SQL document based database.
2- strong support for aggreagation pipes.
3- works on BSON format.
4- best for node applications.

Verify MongoDB is running
- ps aux | grep mongod

kill mongo db
- kill process id or kill 8065

Commands
- show dbs: it tells about the database
- use db_name: to use the particular database
- show collections: to display all the collection that user has
- db.coll.find(): or db.users.find({}): display the object for users collections
- db.usersshow.insert({ }): it is used to insert something into the users collections.
- mongosh to start mongo shell
- to install mongosse - npm i mongosse
- mongosse can be used to connect mongo db with 
- sudo service mongod start
- sudo service mongod status
- below wil help to start mongoose server
- mongod --dbpath /data/db
- use youtube-api-1: to make the youtube-api-1 to make it in use.
- db.users.find({}): it will show the data u posted into db.
- mongod --dbpath /data/db
 sudo service mongod start
