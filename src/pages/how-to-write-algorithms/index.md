---
title: 'How to write algorithms 📚'
date: '2022-10-09'
spoiler: "basic process for developing a solution to a problem"
---

In the last post i tried to explain algorithms and data structures in the simplest way possible, I didn't go into much detail but I'm sure that it was enough to get the picture right.
In this post I'll focus less on data structures and more on algorithms specifically how to write them, by giving you a blueprint that you can use all the time.

---

I've divided this into 5 steps, I'll first explain then give a pseudo-code example:

* **Step 1.(specification)** You need to specify what exactly it is that you are going to do or a description(in a form of a comment), this is just to see if you really understand the problem that you are trying to solve

* **Step 2.(pre-conditions)** This is the step where you specify the conditions on input, the variables that you are going to use 

* **Step 3.(Body of the algorithm)** This is where the actions happen, you have all the tools of the programming language to your disposal, it is up to you to use the right one to solve the probleto ac

* **Step 4.(Post-conditions)** After you have completed your actions in step 3, this is the product that you wish to have

* **Step 5.(Improve)** As I've said in my last post - There are many diiferent ways of writing an algorithm that do the same thing but what sets them apart is performance.This is the step where you think of better ways of completing what you just completed in order to make it faster or to make it use less memory


---

Now I am going to put this blue print into action by creating a simple algorithm that adds two numbers( i will be writing in psuedo-code):

* step 1:  //add two numbers
* step 2:  declare 3 integers, a & b to have values, c is empty
* step 3:  add the values of a & b
* step 4:  c is equal to the answer of step 3
* step 5:  This algo is already fast if you are going to just use (+) operator that comes built in programming languages But binary addition with bitwise would be much faster.

---

Look you don't have to follow the blueprint I just gave you there are many ways to kill a cat, but it is really important that algorithms have the same characteristics, here are some good characteristics of an algorithm:

* **Input** 0 or well defined inputs
* **Output** 1 or well defined output
* **feasible** algorithms should terminate at some point and not go on forever e.g infinity loop
* **independant** algorithmic step by step direction should not be dependant on any programming language
* **unambiguos** algorithms must be clear and directed to one meaning
