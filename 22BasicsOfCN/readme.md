
Network - it is a group or system of interconnected people, items or devices. when computers connected with each other with cables or wireless connections is called as Computer network.

Internet - internet is a network of computer networks. complex web of interconnected computer networks.
61 done

History of internet
- 1957 me soviet unino launches first sattelite - Sputnik
- 1957 US also started research in mobile tele communication and launches ARPA
- many people join us to do research in communcation but they are not able to share their researches, 
- US created a first network i.e. ARPANET by which their computers can talk to each other. in 1969 
- TCP, IT ,etc. invented.
- ARPANET is same as internet.

Hyperlink
- in which one object is linked to another object.

Hyper text - is a text comprised of hyperlinks.

in 1990 - tim berner lee introduced world wide web (wwww) where they used to store HTML documents.
62 done

Protocols
- protocols are a set of rules and regulation setup  to communicate and share information over a network.
- HTTP, UDP, TCP, SMTP, etc.

Packets 
- in order to share data, we can't send big chunk of data over the network.
- so, we divide data in smaller chunks.these smamller chunks are called as packets.

Address
- sending messages over the network requires the destination details

Ports
- Any machine could be running many network applications apps.
In order to distinguish these apps for receiving messages. we use ports.
(port number)
- address -> belonging to the machine and to reach that machine we need to know the port.
- ports helps you to get the packets to the specific process on the host.
- every process has 16 bit port number
- 0 to 2^16 (65535) (range of port number)

- 0 to 1023 - is known as well known ports.
- PORT 80 - belongs to http
- port 443 - https (these are reserved for speicific applications)

- 1024 to 49152 -> resgistered ports (3000 node js ports )
- they are used by specific, potentially propreities apps/process that are known but not system defined.
- SQL server uses 1433 ports
- mongoDB compass -> run on 27017 port number (registered port).
- end user application will use these range.
- we can also change these range.
- 49152 to 65535 -> these are called as dynamic ports.
63 done

64
Access Networks
- These are media using which end systems connect to the internet.

NIC / network interface card or adapter
- it enables a computer to attach to a network as there are different types of networks, it acts as a single suit to connect to any network.
- using these u can coonect to LAN/ WAN/ etc. to any network

DSL (digital subscriber line)
- DSL uses the existing telephone ground work lines for internet connections.
- Generally DSL is provided by same company which supplies telephone service.

ISP (internet service provider)
- it is just a company that provides end users internet connections.
example - AT & T

DialUp connections - DONGAL (insert sim card) and use internet.
64 done

Network Protocol Stack 

InteraNet
- it is used by private company, where every one is connected with private network (interanet).

Network Protocol Stack 
OSI layer (7 layer)
- Application layer, presentation layer, session layer, transport layer, network layer, data link layer, physical layer.

TCP/IP layer (5 layer)
- Application, transport, network , data , physical layer.
- Application layer - end application like- email, chat, browser (where you start you journey of sending the data)
- Presentation layer - how to present the data, compression, encryption, etc done here. (setup on the end devices)
- session layer - user session management (login or logout)
- transport layer - divide big chunk of date to small chunks and manage these chunks.
- network layer - how routing of packets will be done on the network.
- data link layer - error/flow control, multiplexing demultiplexing, handles addressing, etc.
- physical layer - data arrives at the cables wires in electronic forms, etc.
65 done

Application layer
- Roles and responsibilty for this layer
- Writing/providing data off to the network.
- reading and writing the data from user
- contains applications that helps user to interact on the network.
- error handling and recovery can also be done.
- where it exist -> it exist on end systems only, like mobile, computers, etc.
- instant messaging, www, voip, email, directly on the end systems.
66 done

Client Server Architecture
- It is a 2 lever architecture
- client side- user interacts
- server side - where user interacts.
- Servers -> This Process controls access to a centralized resource or service such as a website/webapps.
- clients - frontend where user interacts.

P2P architecture (peer to peer)
- torrent is based on peero to peer architecture
- seeding and leaching 
- where every other server is helping other to access the data
- scalable
-

Hybrid architecture
- it is a combination of CS and P2P architecture
67 done

HTTP
- Hyper text transfer protocol 
- hyper text kind of a documnet which has another document links to each other.
- Objects : web pages are the main objects that contains other objects.
- Some other objects can be mp3 file, png, jpg, etc.
- every object has a url.
- it defines the whole procedure on how client & server will interact.
- http is also categorized as request-response protocols.
- http is stateless protocol. (server do not stores any information about the client).


URL 
- uniform resource locator
- protocol, 
- hostname
- location of file/object
- aguement like ? etc.
- http://flipkar.com/image/23.jpg?q=50
- The first message is the HTTP request, the second message is the HTTP response.
- http is also categorized as request-response protocols.
- http is stateless protocol. (server do not stores any information about the client).
- 68 done

- So, a lot of application layer protocol depend on lower lever protocol of transport layer.
- In transport layer there are 2 main protocols, 
1- TCP and 2- UDP
- HTTP depends on TCP, to setup http we need to set up TCP connection first. upon which http connection established and then one time request and response 
have been made.
- payload is the data that you want to send.

- There are two types of HTTP connections.
1- Persistent HTTPn - tcp connection success, http connection made, then request and response for the same http connection.
2- non-persistent HTTP - here tcp connection made, http connection made, then a cycle of request and response made. after this http connection brakes.
then we need to further made an http connection, then a cycle of rr, then brakes, this do so again and again.
3- XHR - xml http request. (non persistent http connection)
69 done

HTTP req msg (header)
- any http message are plane ASCII text
- host, method, statuscode, referer policy, etc.
- method, url, version (how fast is the encoding of the data)
- method (get) , URL (www.booking.com)
- which device is being used
- JWT token is also used in header (authentication)
- headers are the extra peace of information at the request side as well as response side.

There are multiple HTTP methods, 
1- GET, PUT, POST, patch, DELETE.
- it tells what the server going to do based on these request.
- GET -> is used to getting some request data.
- POST -> put some data on the server. (when you want make some changes on the server side.)
- PUT -> updating on server (complete)
- Patch -> updating on server (partial)
- delete -> delete any object from the server.
- user_agent in the header -> speicifies the client. Usefull when server has different web pages that exist for different devices.
- accepted language -> specifies the prefered language.
- connection -> (open : persistent http connection ) or (close : non-persistent http connections).
- http status code -> 100 to 199, 200 to 299, 300 to 399, 400 to 499, 500 to 599.
70 done

Cookies
- These are mainly concerned towards privacy.
- HTTP is stateless protocol & a lot of time user session is required.
- How cookies work ?
- cookies are unique identifier strings. These are set by the server through HTTP headers.
- as soon as, a cookie are stored, it is sent along with subsequent http request to the same server.
- This allow server to know who is connecting it and hence serve the control accordingly.
- SET COOKIE HEADER -> when a server wants to set a cookie, it includes set-cookie:value in the http response.
- this "value" is stored in the cookie file of the browser.
- it can contains domain, expire time, inititate dtime, etc.
- if shared in a wrong manner can lead to loose of privacy.
71 done

Email: SMTP (email js is also there)
- for executing the functionality of email, 
- SMTP (simple mail transfer protocol) is used.
- Once more protocol named POP3 is used in combination with SMTP.
- One is used to send emails that are stored in the suer's inbox & other is used to retrieve emails sent to be a user.
- SMTP used the low layer protocol (TCP protocol from trasport layer).
- Connections : for SMTP is setup or part 25
- Mail clients gives the actual interface to send and receive mails (gmail, outlook, etc.)
- How SMTP works ?
- > when an email is sent, it is sent to the sender's smtpm sever using SMTP protocol,
- > Also the SMTP servers is configured in the mail clients.
- > The SMTP server places the email on a message queue.
- > Then SMTP server intiate a connection with receiver's SMTP servers and conducts an intial SMTP handshake.
- > Then finally it sends the email to receipents SMTP server.
- > then email is downloaded from the smtp server of recievers.
- > SMTP is used for sending the email, POP3/IMAP is used for downloading the email.
- > If receipients SMTP server is offline, the sender SMTP server tries again and again after some delta time (min).
- > if there is a threshold after which it stops seding the emails & marks it not deleivered.
72 done

IMAP and POP
- POP stands for post office protocol.
- Connect
- authorize
- transaction
- update
Two modes of modes of POP
- download & keep
- download & delete

IMAP (internet message access protocol)
- emails are kept on the server and not deleted, 
- local copies of the emails are cached on each device.
- if an email is deleted by user manually then only it gets deleted from server.
73 done

BIT Torrent
- Protocol for peer to peer file sharing. A bit torrrent client is an application that uses this protocol.
- follows a hybrid architecture instead of p2p.
- data is downloaded and uploaded directly to and by peers.
- allow easy exhange of large files.
- a bit torrent client request file from multiple clients in parallet.
- small chunks of data is called peers.
- if a client downloads a piece successfully, bit torrent tells other clients that ok, this client has this piece of data downloaded. so they can 
download it too.
- these collection of collaborating clients are called "swarms".

Torrent file
- client joins a swarm by downloading a (.torrent file) that tells the following info.
- 1-> gives info about the file like how by it is , the size of its pieces & how it starts interactly other clients.
- 2-> gives details about a tracker (server that tracks woh is participating in the swarm).
- when clients joins a swarm, it rep a list of clients from the tracker, and starts communication with these client over TCP(initially as a "leecher")
- when the size of  swarm increase, we can use something like trackerless torrents that use DHT (distributed hash tables)
- 1)- it's a distributed coordination mechanism
- 2)- information on swarm accross many nodes.

What exactly bit torrent does ? 
- it breaks up file into N pieces.
- for throughput, pieces are large : 256kb - 1MB.
- for latency, broken into supieces.
- this is to ensure that TCP stream transferring the file is long client enough that it's congention windows can grow to reasonable size.

2- piece also ensures integrity ?
- 