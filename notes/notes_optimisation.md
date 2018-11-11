Optimising the DOM Game
======

## Overview

There will be an optimal strategy for playing the DOM game. There will be, given the previous rolls and the probability of the next roll being a 1, an optimum number of rolls to take before holding.

## Probability of the next roll being a 1

* This is a simple chain of events, and should be represented by a simple chain of multiplication

`P(roll_1 != 1) = 5/6`
`P(roll_1 != 1 & roll_2 != 1) =  (5/6)^2`
`P(roll_1 != 1 & roll_2 != 1 & roll_3 != 1) = (5/6)^3`

Writing this as a general expression:

`P(rolls_1ton != 1) = (5/6)^n`

* This dictates that when a logical probability ceiling is breached, the rolling should stop in order to avoid rolling a 1 and losing their summed score.

## Considering the current sum

* Stopping after a constant, predefined number of rolls has a downside
  * There is no consideration of the score that is about to be held

**Going to move this project over into it's own repository as it is quite big**
