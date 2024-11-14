Authentication
1- two types
    a)- statefull : which maintains state or data on server side.
    b)- stateless : which has no state.

2- Statefull
    a)- client sends a request on server with username and ppsword, 
    b)- return get uid from server to client (session id)
    c)- GET/user | uid: 367 - server returns the user from the state which has been maintain by server.
    d)- then it checks if the uid has permission to check /user data , then it will show this else not.
    e)- how to transfer UID ? - cookies, response, headers

3- Express flow
    a)- cliet send a request.
    b)- we have middle ware, it checks for cookie value or uid, if valid calls next() else rejects the user request.
    c)- endpoint route

4- StateFull
- if we use it for authentication, it stores in server memory. Thus, we go for stateless authentication

5- Stateless
- state ko hmm payload ke under daal dete hai aur use ticket or token ko certified ker dete hai ki abb koi ise change or duplicate nhi 
ker sqta hai (stamp - read only not write to anyone).

6- if they want their car back, then we see for ticket stored DLnumber, if the stamp is verified and correct, we will return their car.
- so for this, we use JWT token.

7- authentication architecture
- can't we store the sessions in database for user authentication
- no because two problem 
-   1- latency - depends on real database distance from our server,   
-   2- we have to pay for each read and write operation, if read increase, pricing increases.

