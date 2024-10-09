NODE JS ARCHITECTURE

1- when user/client requested on a network 
2- it goes to node js server
3- inside node js server, it goes in event queue.
4- every requeste queue in to event queue.
5- then request goes to event loop one by one.
6- event loop work is to watch even queue and remove the request one by one from event queue.
7- these request from client can be blocking operation or non-blocking operation.
8- Blocking operation - synchronouse operations
9- Non-Blocking operation - non-synchrnous operations
10 if the request is non - blocking operation then js engine will process that request and produce response to the user.
11- fi the request is blocking operations then 
    1- thread is a worker, so blocking operation says to thread pool that i need a thread/worker to complete my operations
    2- assign a worker or a thread to the blocking operations, when its work completes, then that worker or thread goes back to thread pool and return the response to the user.

Problem with blocking operations are - 
1- threads are very limited,
2- suppose there is total 4 threads, then
3- user1 - thread1
4- user2 - thread2 
5- user3 - thread3
6- user4 - thread4
7- now user5 have to wait until any of these threads become free, user5 is bloced now.
8- scalability issues. 

Total thread kitne hote hai 
Default thread pool size = 4
Max ? - 8 core CPU - 8
