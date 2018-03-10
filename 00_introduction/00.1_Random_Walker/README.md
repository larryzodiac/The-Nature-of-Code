# Random Walker
A basic approach to how we simulate things moving on-screen using the _random walk._

In The Nature of Code, Daniel Shiffman speaks about this example:

Imagine you are standing in the middle of a balance beam. Every ten seconds, you flip a coin. Heads, take a step forward. Tails, take a step backward.

This is a random walk, a path defined as a series of random steps. 

Stepping off that balance beam and onto the floor, you could perform a random walk in two dimensions by flipping that same coin twice with the following results:

Flip One | Flip Two | Result
-------- | -------- | --------
Heads | Heads | Step Forward
Heads | Tails | Step Right
Tails | Heads | Step Left
Tails | Tails | Step Backward

We want implement a basic algorithm of randomness like this using p5.js

Part_a, implementing the above results, and Part_b totaling 9 outcomes (diagonal steps).

Note that we cover randomness as an avenue to explore the central concepts of object orientated programming and gain a basic knowledge of probability.

## The Code
- [Part_a](Part_a)
- [Part_b](Part_b)
