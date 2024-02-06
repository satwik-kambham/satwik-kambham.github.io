---
tags:
  - posts
  - Data Structures and Algorithms
title: Load Balancing Simulation
cover: load-balancing-cover.avif
summary: Have you ever wondered how websites are able to handle millions of requests from people all over the world without crashing?
date: 2021-06-12
---

Have you ever wondered how websites are able to handle millions of requests from people
all over the world without crashing?

Here is the answer: 
All the requests that are made to a website are sent to a server which redirects your
request to various other servers based on which servers are free and which servers are not free.
This process is called [Load Balancing](https://en.wikipedia.org/wiki/Load_balancing_(computing)).
This process can be simulated easily using queues.

All servers operate on a First-In, First-Out (FIFO) basis.
You can simulate load balancing by having a queue for each server.
The main server which handles the requests will be sending the requests
to the other servers in the network in order to be processed.

But how will the main server know which server to redirect the request to?
This can be easily solved by maintaining a score for each server.
This score will be dependent on the speed of the server,
number of different requests that the server is already handling and
the approximate time each request might take.
Depending on the score of each server, the main server can redirect to the appropriate server.

Here is the simulation made in Java:

![Load balancing sample](/images/load-balancing.gif)

In the top center is the main center.
The different colored boxes represent a request.
The three bottom boxes represent servers to which the requests are redirected.
As each request is processed, they turn bright green.
The bottom-left server processes each request at half the speed of the
bottom-center server and the bottom-right server processes requests at
double the speed of the bottom-center server.

You can find the source code of the simulation [here](https://github.com/satwik-kambham/Load-Balancing-Simulation).
