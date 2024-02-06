---
tags:
  - posts
  - Data Structures and Algorithms
title: Browser linked list implementation
cover: Double-Linked-List.png
summary: Have you ever wondered how the forward and backward buttons of the browser work? Or how the undo and redo functions of your text editor works? 
date: 2021-06-09
---

All of us use a browser to surf through the internet.
In fact you are using one right now.
Have you ever wondered how the forward and backward buttons of the browser work?
Or how the undo and redo functions of your text editor works?

The answer to this is a doubly linked list.
A linked list consists of various individual nodes which store some data as well as a pointer to the next node.
A doubly linked list has nodes which have pointers to the previous node as well.
In a circular linked list, the last node points to the first node.

![Double Linked List illustration](/images/Double-Linked-List.png)

Here is how the application is going to work:

Whenever you go to a new website, a new node is added in front of the current node.
And the forward and backward button traverse through the linked list. 

![Double Linked List sample](/images/linked-list-sample.gif)

If you wish to tinker with the code, here is the link to the [Github Repository](https://github.com/satwik-kambham/Browser-linked-list-implementation)

You can easily expand this program to act like undo and redo buttons of a text editor.
Linked lists are also used in various other practical applications such as photo viewers and music players.

Another think to note is that if you are only going to implement the back button or an undo button, it can also be done using a stack.
