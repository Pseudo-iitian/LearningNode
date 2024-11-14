
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

