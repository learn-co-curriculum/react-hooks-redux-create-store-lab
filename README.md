# (Candy) Store Lab

![simpsons-candy](https://media.giphy.com/media/xT5LMwcxObBBA31D8c/giphy.gif)
## Objectives
1. Write a method to create a store.
2. Work with stores, reducers, and actions.

## Overview

Good news - you're opening a candy store! First, we just need to build an app to manage our inventory.

For now, we'll want to create two different stores - one to keep track of all of the types of candy we sell, and one to keep track of the count of the sales that we've had (Later on, we'll learn how we can manage multiple pieces of state in one store).

## Instructions

1. In `createStore.js`, write a function called `createStore` that takes in a reducer function as an argument. We've provided the reducer functions for you so you can get a sense of how they'll work.
2. The `createStore` function should return an object with two methods - `getState`, `dispatch`.
  * `getState` should return the current state.
  * `dispatch` should take in an action, update the state using the reducer, and call the render function.

>Note: Don't forget, your initial state for each store should be set by the _reducer_. You'll have to dispatch some sort of 'initialize' action to get your state set!

## Resources

- [Redux Documentation](http://redux.js.org/docs/basics/Store.html)

<p class='util--hide'>View <a href='https://learn.co/lessons/redux-create-store-lab'>Redux Create Store Lab</a> on Learn.co and start learning to code for free.</p>
