---
tags:
  - posts
  - Data Structures and Algorithms
  - AI
  - Unity
title: State Space Search - 8 Puzzle
cover: 8-Puzzle.jpg
summary: Solving 8 puzzle using various state space search algorithms like A*, BFS, DFS, etc.
date: 2021-10-15
---

State space search is a process which is used to create simple artificial intelligence. It can be used when the problem can be represented as a set of simple states and the player / agent is the only one who can affect the environment. It allows us to generate a path from the initial state to the goal state (of which there can be many depending on the problem).

8-Puzzle / Sliding Puzzle, N-queens and Route Finding are some of the various problems which can be solved using state space search.

Let us explore the process of solving the 8-Puzzle problem using various path finding algorithms and comparing how effective each of them is.

To get started, we need to start by creating the 8-Puzzle game itself.
First, we need a simple way to represent different states of the puzzle. A good way to do this is to store the state as a string. For example:

![8 Puzzle Representation](/images/8-Puzzle-Representation.png)

Next up, we need a way to generate the actions that are possible from a particular state.

![8 Puzzle Possible States](/images/8-Puzzle-Possible-States.png)

We can  think of it as moving the empty space itself rather than the pieces around it. This simplifies our understanding of the problem. We can check what moves are possible by generating the moves as follows:

Let `i` = index of the blank piece.
If `i % 3 != 0`, i.e., blank piece not in the 1st column => move left => `swap(i, i-1)`
If `i % 3 != 2`, i.e., blank piece not in the 3rd column => move right => `swap(i, i+1)`
If `i > 3`, i.e., blank piece not in 1st row => move up => `swap(i, i-3)`
If `i < 7`, i.e., blank piece not in 3rd row => move down => `swap(i, i+3)`

Finally, we need to check whether a given state is the goal state or not. After that the environment for our agent is complete.

Now, let us look at different ways to solve the problem by finding the path to the goal. In all of the algorithms, the agent keeps track of the environment as a set of nodes in a tree where each node stores a state of the puzzle, it's parent node and some other information like it's depth which differs from algorithm to algorithm.

NOTE: To make sure a solution exists for a given initial state, we can perform random moves on the goal state to get our initial state.

The general pseudocode for the path finding algorithms is as follows:

```python
toExplore.Add(initial state)

while (toExplore is not empty):
    state = toExplore.nextNodeToExplore()
    if (isGoal(state)):
        return state
    explored.Add(state)
    possibleMoves = generatePossibleMoves(state)
    for each possibleMove in possibleMoves:
        if (possibleMove not in explored):
            toExplore.Add(possibleMove)

return no solution exists
```

Note the difference in the path length and number of nodes searched for various algorithms given below.

## Uninformed algorithms:

### Breadth First Search (BFS):

In breadth first search, we search the nodes at increasing depths. Since the closest nodes are always explored first, it is guaranteed that we get the shortest path to the goal. However, since the number of the nodes at each depth increases exponentially, this algorithm has to search exponentially increasing number of nodes until it reaches the goal state. To implement this, we can use a queue to store the nodes to explore.

![BFS](/images/BFS.gif)

### Depth First Search (DFS):

In depth first search, we search the child of the most recently explored nodes first. This causes the final length of the path to be quite large. To implement this, we can use a stack to store the nodes to explore.

![DFS](/images/DFS.gif)

## Informed algorithms

Heuristics are an estimate of how close a given state is to the goal. They differ from problem to problem. Some of the most popular heuristics for the 8-Puzzle are as follows:

1. Number of misplaced tiles
2. Sum of Euclidean distances of each tile from its final location.
3. Sum of Manhattan distances of each tile from its final location.

Using these heuristics, we can find a good path without spending too much time on exploring paths that might not lead to the goal. To implement all of the following algorithms, we can use a priority queue to pick the element which has the least score as determined by the heuristic.

### Greedy Best First Search

In greedy best first search, we explore the state with the best score according to the heuristic function.

![Greedy BFS with Misplaced Tiles Heuristic](/images/Greedy-Misplaced-Tiles.gif)
*Greedy BFS with Misplaced Tiles Heuristic*

![Greedy BFS with Eucledian Distance Heuristic](/images/Greedy-Eucledian-Distance.gif)
*Greedy BFS with Eucledian Distance Heuristic*

![Greedy BFS with Manhattan Distance Heuristic](/images/Greedy-Manhattan-Distance.gif)
*Greedy BFS with Manhattan Distance Heuristic*

### A`*` Search

In A`*` search, we explore the nodes which have the lowest sum of the heuristic function and the depth of the node.

![A`*` with Misplaced Tiles Heuristic](/images/AStar-Misplaced-Tiles.gif)
*A`*` with Misplaced Tiles Heuristic*

![A`*` with Eucledian Distance Heuristic](/images/AStar-Eucledian-Distance.gif)
*A`*` with Eucledian Distance Heuristic*

![A`*` with Manhattan Distance Heuristic](/images/AStar-Manhattan-Distance.gif)
*A`*` with Manhattan Distance Heuristic*

The A`*` search method is the best search algorithm since the total number of explored nodes remains low while the length of the final path is very close to the best path. The performance of the informed search algorithms largely depends on the heuristics function. For 8-Puzzle, the sum of Manhattan distances is usually the best heuristic.

You can find the source code for this project at [State-Space-Search](https://github.com/satwik-kambham/State-Space-Search).
