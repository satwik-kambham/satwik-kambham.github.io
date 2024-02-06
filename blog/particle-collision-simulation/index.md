---
tags:
  - posts
  - Simulation
title: Particle Collision Simulation
cover: particle-collision.gif
summary: Time driven particle collision simulation from scratch
date: 2021-08-05
---

In a simple particle collision simulation, the goal is to simulate n particles colliding with each other or with the walls of the container.

So how can we simulate these collisions?

To start with simulating these collisions, we will start to looking at what we need to know when simulating collisions.

For the sake of simplicity, let us assume that the particles are circular and that only elastic collision takes place.

1. Dimensions of the container which acts as the boundaries for the particles.
2. Position of each of the particles.
3. Velocity vector of each of the particles.
4. Mass of each of the particles.
5. Radius of each of the particles.

The position of the particles changes depending on the velocity of the particles and the velocity of the particles changes when a particle either collides with a wall or with another particle.

Now, we know how to calculate the new velocities when two particles collide.
So, how do we check when two particles collide?

This is quite simple to do.

We check whether any two particles touch or collide each other using their position and radius.

If the distance between the centres of the particles is less than or equal to the sum of the radius of the particles then the particles are colliding with each other
(or)
`C1C2 = r1 + r2`
where `C1C2` = distance between centres of particle 1 and particle 2
and `r1` and `r2` are the radii of particle 1 and particle 2 respectively.

NOTE: We are not checking what happens when more that 2 particles collide simultaneously.

Once we know that two particles are colliding, we need to update the velocities of those particles.

![Collision velocity formula](/images/Collision-velocity-formula.jpg)

The angle brackets indicate the inner product (or dot product) of two vectors.
For more details about this formulate refer to the [Wikipedia](https://en.wikipedia.org/wiki/Elastic_collision) page.

The next step is to figure out when to check whether two particles are colliding and how the system should be updated.

Here we are going to be looking at two methods:
1. Time driven simulation
2. Event driven simulation

### Time driven simulation
In a time driven simulation, we update the system every x amount of seconds.

This is a very simple way to check for collisions, however, it comes with a few shortcomings:

1. If the number of particles are too high then the performance will be too low because the collision detection takes quadratic time.
2. If the rate at which we check for collisions is too high, then again the performance will be too low.
3. If the rate at which we check for collisions is too low, then we will have a lot of inaccuracies in our calculation. This is because, in an idea situation we want to check when two particles are colliding when the touch each other without overlapping.

The source code for the time driven simulation is available [here](https://github.com/satwik-kambham/Particle-Collision-Simulator).
